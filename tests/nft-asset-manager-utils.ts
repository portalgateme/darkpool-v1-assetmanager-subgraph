import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NftTransfer,
  NftWithdraw,
  OwnershipTransferred
} from "../generated/NftAssetManager/NftAssetManager"

export function createNftTransferEvent(
  nullifierIn: Bytes,
  amount: BigInt,
  asset: Address,
  noteOut: Bytes,
  noteFooter: Bytes
): NftTransfer {
  let nftTransferEvent = changetype<NftTransfer>(newMockEvent())

  nftTransferEvent.parameters = new Array()

  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return nftTransferEvent
}

export function createNftWithdrawEvent(
  nullifierIn: Bytes,
  amount: BigInt,
  nftAsset: Address,
  recipient: Address
): NftWithdraw {
  let nftWithdrawEvent = changetype<NftWithdraw>(newMockEvent())

  nftWithdrawEvent.parameters = new Array()

  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return nftWithdrawEvent
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
