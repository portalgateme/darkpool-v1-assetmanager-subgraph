import {
  CurveAddLiquidity as CurveAddLiquidityEvent
} from "../generated/CurveMPAddLiquidityAssetManager/CurveMPAddLiquidityAssetManager"
import {
  CurveAddLiquidity
} from "../generated/schema"

export function handleCurveAddLiquidity(event: CurveAddLiquidityEvent): void {
  let entity = new CurveAddLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifiers = event.params.nullifiers
  entity.asset = event.params.asset
  entity.amountOut = event.params.amountOut
  entity.noteOut = event.params.noteOut
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
