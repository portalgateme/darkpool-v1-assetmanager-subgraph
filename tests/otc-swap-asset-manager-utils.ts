import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Swap
} from "../generated/OTCSwapAssetManager/OTCSwapAssetManager"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSwapEvent(
  nullifierIn1: Bytes,
  nullifierIn2: Bytes,
  noteOut1: Bytes,
  noteOut2: Bytes
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn1",
      ethereum.Value.fromFixedBytes(nullifierIn1)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn2",
      ethereum.Value.fromFixedBytes(nullifierIn2)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("noteOut1", ethereum.Value.fromFixedBytes(noteOut1))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("noteOut2", ethereum.Value.fromFixedBytes(noteOut2))
  )

  return swapEvent
}
