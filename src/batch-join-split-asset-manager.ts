import {
  BatchJoinSplit as BatchJoinSplitEvent
} from "../generated/BatchJoinSplitAssetManager/BatchJoinSplitAssetManager"
import { BatchJoinSplit } from "../generated/schema"

export function handleBatchJoinSplit(event: BatchJoinSplitEvent): void {
  let entity = new BatchJoinSplit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifiersIn = event.params.nullifiersIn
  entity.notesOut = event.params.notesOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}