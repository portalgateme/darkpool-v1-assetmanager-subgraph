import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  DefiIntegration,
  OwnershipTransferred
} from "../generated/GeneralDefiIntegrationAssetManager/GeneralDefiIntegrationAssetManager"

export function createDefiIntegrationEvent(
  contractAddress: Address,
  nullifiers: Array<Bytes>,
  outNote: Array<Bytes>,
  outAmount: Array<BigInt>,
  noteFooter: Array<Bytes>
): DefiIntegration {
  let defiIntegrationEvent = changetype<DefiIntegration>(newMockEvent())

  defiIntegrationEvent.parameters = new Array()

  defiIntegrationEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  defiIntegrationEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiers",
      ethereum.Value.fromFixedBytesArray(nullifiers)
    )
  )
  defiIntegrationEvent.parameters.push(
    new ethereum.EventParam(
      "outNote",
      ethereum.Value.fromFixedBytesArray(outNote)
    )
  )
  defiIntegrationEvent.parameters.push(
    new ethereum.EventParam(
      "outAmount",
      ethereum.Value.fromUnsignedBigIntArray(outAmount)
    )
  )
  defiIntegrationEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytesArray(noteFooter)
    )
  )

  return defiIntegrationEvent
}

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
