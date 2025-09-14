import { Bytes } from "@graphprotocol/graph-ts"
import {
  CurveRemoveLiquidity as CurveRemoveLiquidityEvent
} from "../generated/CurveMPRemoveLiquidityAssetManager/CurveMPRemoveLiquidityAssetManager"
import {
  CurveRemoveLiquidity
} from "../generated/schema"

export function handleCurveRemoveLiquidity(
  event: CurveRemoveLiquidityEvent,
): void {
  let entity = new CurveRemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.assets = event.params.assets.map<Bytes>((value)=>value as Bytes)
  entity.amountsOut = event.params.amountsOut
  entity.notesOut = event.params.notesOut
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
