import {
  CurveAddLiquidity as CurveAddLiquidityEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/CurveAddLiquidityAssetManager/CurveAddLiquidityAssetManager"
import { CurveAddLiquidity, OwnershipTransferred } from "../generated/schema"

export function handleCurveAddLiquidity(event: CurveAddLiquidityEvent): void {
  let entity = new CurveAddLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifiers = event.params.nullifiers
  entity.noteOut = event.params.noteOut
  entity.amountOut = event.params.amountOut
  entity.noteFooter = event.params.noteFooter

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
