import {
  AerodromeSwap as AerodromeSwapEvent,
} from "../generated/AerodromeSwapAssetManager/AerodromeSwapAssetManager"
import { AerodromeSwap } from "../generated/schema"

export function handleAerodromeSwap(event: AerodromeSwapEvent): void {
  let entity = new AerodromeSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.assetOut = event.params.assetOut
  entity.amountOut = event.params.amountOut
  entity.noteCommitment = event.params.noteCommitment
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}