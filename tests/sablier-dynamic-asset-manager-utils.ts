import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  SablierClaimStream,
  SablierCreateStream
} from "../generated/SablierDynamicAssetManager/SablierDynamicAssetManager"

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

export function createSablierClaimStreamEvent(
  nullifier: Bytes,
  asset: Address,
  amountOut: BigInt,
  noteOut: Bytes,
  noteFooter: Bytes
): SablierClaimStream {
  let sablierClaimStreamEvent = changetype<SablierClaimStream>(newMockEvent())

  sablierClaimStreamEvent.parameters = new Array()

  sablierClaimStreamEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  sablierClaimStreamEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  sablierClaimStreamEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  sablierClaimStreamEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  sablierClaimStreamEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return sablierClaimStreamEvent
}

export function createSablierCreateStreamEvent(
  sender: Address,
  nft: Address,
  streamIDs: Array<BigInt>,
  notesOut: Array<Bytes>,
  noteFooters: Array<Bytes>
): SablierCreateStream {
  let sablierCreateStreamEvent = changetype<SablierCreateStream>(newMockEvent())

  sablierCreateStreamEvent.parameters = new Array()

  sablierCreateStreamEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sablierCreateStreamEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  sablierCreateStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamIDs",
      ethereum.Value.fromUnsignedBigIntArray(streamIDs)
    )
  )
  sablierCreateStreamEvent.parameters.push(
    new ethereum.EventParam(
      "notesOut",
      ethereum.Value.fromFixedBytesArray(notesOut)
    )
  )
  sablierCreateStreamEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )

  return sablierCreateStreamEvent
}
