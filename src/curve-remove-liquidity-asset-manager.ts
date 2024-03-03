import {
  CurveRemoveLiquidity as CurveRemoveLiquidityEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/CurveRemoveLiquidityAssetManager/CurveRemoveLiquidityAssetManager"
import { CurveRemoveLiquidity, OwnershipTransferred } from "../generated/schema"

export function handleCurveRemoveLiquidity(
  event: CurveRemoveLiquidityEvent,
): void {
  let entity = new CurveRemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.outPut = event.params.outPut

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
