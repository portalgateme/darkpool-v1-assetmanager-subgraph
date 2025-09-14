import {
  UniswapSwap as UniswapSwapEvent,
} from "../generated/UniswapSwapAssetManager/UniswapSwapAssetManager"
import { UniswapSwap } from "../generated/schema"

export function handleUniswapSwap(event: UniswapSwapEvent): void {
  let entity = new UniswapSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.assetOut = event.params.assetOut
  entity.amountOut = event.params.amountOut
  entity.noteNullifierIn = event.params.noteNullifierIn
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitmentOut = event.params.noteCommitmentOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
