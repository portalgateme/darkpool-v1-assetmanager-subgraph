import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RocketDeposit,
  RocketWithdrawal
} from "../generated/RocketPoolStakeAssetManager/RocketPoolStakeAssetManager"

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

export function createRocketDepositEvent(
  nullifier: Bytes,
  amount: BigInt,
  noteFooter: Bytes,
  noteCommitment: Bytes
): RocketDeposit {
  let rocketDepositEvent = changetype<RocketDeposit>(newMockEvent())

  rocketDepositEvent.parameters = new Array()

  rocketDepositEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  rocketDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rocketDepositEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  rocketDepositEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitment",
      ethereum.Value.fromFixedBytes(noteCommitment)
    )
  )

  return rocketDepositEvent
}

export function createRocketWithdrawalEvent(
  nullifier: Bytes,
  amount: BigInt,
  noteFooter: Bytes,
  noteCommitment: Bytes
): RocketWithdrawal {
  let rocketWithdrawalEvent = changetype<RocketWithdrawal>(newMockEvent())

  rocketWithdrawalEvent.parameters = new Array()

  rocketWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  rocketWithdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rocketWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  rocketWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitment",
      ethereum.Value.fromFixedBytes(noteCommitment)
    )
  )

  return rocketWithdrawalEvent
}
