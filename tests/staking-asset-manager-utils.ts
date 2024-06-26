import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Locked,
  OwnershipTransferred,
  Unlocked
} from "../generated/StakingAssetManager/StakingAssetManager"

export function createLockedEvent(
  locker: Address,
  assetIn: Address,
  assetOut: Address,
  amountOut: BigInt,
  noteNullifierIn: Bytes,
  noteFooter: Bytes,
  noteCommitmentOut: Bytes
): Locked {
  let lockedEvent = changetype<Locked>(newMockEvent())

  lockedEvent.parameters = new Array()

  lockedEvent.parameters.push(
    new ethereum.EventParam("locker", ethereum.Value.fromAddress(locker))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("assetIn", ethereum.Value.fromAddress(assetIn))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteNullifierIn",
      ethereum.Value.fromFixedBytes(noteNullifierIn)
    )
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitmentOut",
      ethereum.Value.fromFixedBytes(noteCommitmentOut)
    )
  )

  return lockedEvent
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

export function createUnlockedEvent(
  assetIn: Address,
  assetOut: Address,
  amountOut: BigInt,
  noteNullifierIn: Bytes,
  noteFooter: Bytes,
  noteCommitmentOut: Bytes
): Unlocked {
  let unlockedEvent = changetype<Unlocked>(newMockEvent())

  unlockedEvent.parameters = new Array()

  unlockedEvent.parameters.push(
    new ethereum.EventParam("assetIn", ethereum.Value.fromAddress(assetIn))
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteNullifierIn",
      ethereum.Value.fromFixedBytes(noteNullifierIn)
    )
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitmentOut",
      ethereum.Value.fromFixedBytes(noteCommitmentOut)
    )
  )

  return unlockedEvent
}
