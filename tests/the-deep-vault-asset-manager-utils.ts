import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  TheDeepDeposit,
  TheDeepWithdrawal
} from "../generated/TheDeepVaultAssetManager/TheDeepVaultAssetManager"

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

export function createTheDeepDepositEvent(
  depositor: Address,
  noteFooter: Bytes,
  noteOut: Bytes,
  amount: BigInt,
  asset: Address
): TheDeepDeposit {
  let theDeepDepositEvent = changetype<TheDeepDeposit>(newMockEvent())

  theDeepDepositEvent.parameters = new Array()

  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )

  return theDeepDepositEvent
}

export function createTheDeepWithdrawalEvent(
  nullifier: Bytes,
  assetsOut: Array<Address>,
  amountsOut: Array<BigInt>,
  noteFooters: Array<Bytes>,
  notesOut: Array<Bytes>
): TheDeepWithdrawal {
  let theDeepWithdrawalEvent = changetype<TheDeepWithdrawal>(newMockEvent())

  theDeepWithdrawalEvent.parameters = new Array()

  theDeepWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  theDeepWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "assetsOut",
      ethereum.Value.fromAddressArray(assetsOut)
    )
  )
  theDeepWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "amountsOut",
      ethereum.Value.fromUnsignedBigIntArray(amountsOut)
    )
  )
  theDeepWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )
  theDeepWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "notesOut",
      ethereum.Value.fromFixedBytesArray(notesOut)
    )
  )

  return theDeepWithdrawalEvent
}
