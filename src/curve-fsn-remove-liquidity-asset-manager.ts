import {
  CurveRemoveLiquidity as CurveRemoveLiquidityEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/CurveFSNRemoveLiquidityAssetManager/CurveFSNRemoveLiquidityAssetManager"
import { CurveRemoveLiquidity, OwnershipTransferred, CurveRemoveLiquidityOutPutStruct } from "../generated/schema"

export function handleCurveRemoveLiquidity(
  event: CurveRemoveLiquidityEvent,
): void {
  let entity = new CurveRemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  let outPutArray = new Array<CurveRemoveLiquidityOutPutStruct>();
  for (let i = 0; i < event.params.outPut.length; i++) {
    let out = new CurveRemoveLiquidityOutPutStruct(
      event.params.outPut[i].nullifiers,
      event.params.outPut[i].noteOut,
      event.params.outPut[i].amountOut,
      event.params.outPut[i].noteFooter
    )
    outPutArray.push(out)
  }

  entity.outPut = outPutArray

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
