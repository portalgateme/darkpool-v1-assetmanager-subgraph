import { Bytes } from "@graphprotocol/graph-ts"
import {
  AerodromeAddLiquidity as AerodromeAddLiquidityEvent,
  AerodromeZapIn as AerodromeZapInEvent
} from "../generated/AerodromeAddLiquidityAssetManager/AerodromeAddLiquidityAssetManager"
import {
  AerodromeAddLiquidity,
  AerodromeZapIn
} from "../generated/schema"

export function handleAerodromeAddLiquidity(
  event: AerodromeAddLiquidityEvent,
): void {
  let entity = new AerodromeAddLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifiers = event.params.nullifiers
  entity.assetsOut = event.params.assetsOut.map<Bytes>((value)=> value as Bytes)
  entity.amountsOut = event.params.amountsOut
  entity.noteCommitments = event.params.noteCommitments
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAerodromeZapIn(event: AerodromeZapInEvent): void {
  let entity = new AerodromeZapIn(
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
