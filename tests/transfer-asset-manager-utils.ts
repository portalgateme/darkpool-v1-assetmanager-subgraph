import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Transfer
} from "../generated/TransferAssetManager/TransferAssetManager"

export function createTransferEvent(
  nullifierIn: Bytes,
  noteOut: Bytes,
  noteFooter: Bytes
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return transferEvent
}
