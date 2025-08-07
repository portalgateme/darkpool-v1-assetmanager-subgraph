import {
  CurveExchange as CurveExchangeEvent
} from "../generated/CurveMultiExchangeAssetManager/CurveMultiExchangeAssetManager"
import { CurveExchange } from "../generated/schema"

export function handleCurveExchange(event: CurveExchangeEvent): void {
  let entity = new CurveExchange(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifiers = event.params.nullifiers
  entity.assetOut = event.params.assetOut
  entity.amountOut = event.params.amountOut
  entity.noteOut = event.params.noteOut
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}