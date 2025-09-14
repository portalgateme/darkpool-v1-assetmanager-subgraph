import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  BatchJoinSplit
} from "../generated/BatchJoinSplitAssetManager/BatchJoinSplitAssetManager"

export function createBatchJoinSplitEvent(
  nullifiersIn: Array<Bytes>,
  notesOut: Array<Bytes>
): BatchJoinSplit {
  let batchJoinSplitEvent = changetype<BatchJoinSplit>(newMockEvent())

  batchJoinSplitEvent.parameters = new Array()

  batchJoinSplitEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiersIn",
      ethereum.Value.fromFixedBytesArray(nullifiersIn)
    )
  )
  batchJoinSplitEvent.parameters.push(
    new ethereum.EventParam(
      "notesOut",
      ethereum.Value.fromFixedBytesArray(notesOut)
    )
  )

  return batchJoinSplitEvent
}
