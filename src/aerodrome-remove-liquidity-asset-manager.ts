import { Bytes } from "@graphprotocol/graph-ts"
import {
  AerodromeRemoveLiquidity as AerodromeRemoveLiquidityEvent,
  AerodromeZapOut as AerodromeZapOutEvent,
} from "../generated/AerodromeRemoveLiquidityAssetManager/AerodromeRemoveLiquidityAssetManager"
import {
  AerodromeRemoveLiquidity,
  AerodromeZapOut,
} from "../generated/schema"

export function handleAerodromeRemoveLiquidity(
  event: AerodromeRemoveLiquidityEvent,
): void {
  let entity = new AerodromeRemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.assetsOut = event.params.assetsOut.map<Bytes>((value)=> value as Bytes)
  entity.amountsOut = event.params.amountsOut
  entity.noteCommitments = event.params.noteCommitments
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAerodromeZapOut(event: AerodromeZapOutEvent): void {
  let entity = new AerodromeZapOut(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.assetOut = event.params.assetOut.map<Bytes>((value)=> value as Bytes)
  entity.amountOut = event.params.amountOut
  entity.noteCommitments = event.params.noteCommitments
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
