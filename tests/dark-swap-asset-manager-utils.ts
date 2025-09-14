import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  DarkSwapCancelOrder,
  DarkSwapCancelOrderWithdraw,
  DarkSwapDeposit,
  DarkSwapJoin,
  DarkSwapProCreateOrder,
  DarkSwapProSwap,
  DarkSwapRetailDepositCreateOrder,
  DarkSwapRetailSwap,
  DarkSwapWithdraw,
  OwnershipTransferred
} from "../generated/DarkSwapAssetManager/DarkSwapAssetManager"

export function createDarkSwapCancelOrderEvent(
  owner: Address,
  orderNullifier: Bytes,
  remainingNullifier: Bytes,
  accountNote: Bytes,
  accountNoteFooter: Bytes
): DarkSwapCancelOrder {
  let darkSwapCancelOrderEvent = changetype<DarkSwapCancelOrder>(newMockEvent())

  darkSwapCancelOrderEvent.parameters = new Array()

  darkSwapCancelOrderEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  darkSwapCancelOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderNullifier",
      ethereum.Value.fromFixedBytes(orderNullifier)
    )
  )
  darkSwapCancelOrderEvent.parameters.push(
    new ethereum.EventParam(
      "remainingNullifier",
      ethereum.Value.fromFixedBytes(remainingNullifier)
    )
  )
  darkSwapCancelOrderEvent.parameters.push(
    new ethereum.EventParam(
      "accountNote",
      ethereum.Value.fromFixedBytes(accountNote)
    )
  )
  darkSwapCancelOrderEvent.parameters.push(
    new ethereum.EventParam(
      "accountNoteFooter",
      ethereum.Value.fromFixedBytes(accountNoteFooter)
    )
  )

  return darkSwapCancelOrderEvent
}

export function createDarkSwapCancelOrderWithdrawEvent(
  nullifier: Bytes,
  recipient: Address,
  asset: Address,
  amount: BigInt
): DarkSwapCancelOrderWithdraw {
  let darkSwapCancelOrderWithdrawEvent =
    changetype<DarkSwapCancelOrderWithdraw>(newMockEvent())

  darkSwapCancelOrderWithdrawEvent.parameters = new Array()

  darkSwapCancelOrderWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  darkSwapCancelOrderWithdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  darkSwapCancelOrderWithdrawEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  darkSwapCancelOrderWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return darkSwapCancelOrderWithdrawEvent
}

export function createDarkSwapDepositEvent(
  depositor: Address,
  noteOut: Bytes,
  asset: Address,
  amount: BigInt
): DarkSwapDeposit {
  let darkSwapDepositEvent = changetype<DarkSwapDeposit>(newMockEvent())

  darkSwapDepositEvent.parameters = new Array()

  darkSwapDepositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  darkSwapDepositEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  darkSwapDepositEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  darkSwapDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return darkSwapDepositEvent
}

export function createDarkSwapJoinEvent(
  nullifierIn: Array<Bytes>,
  noteOut1: Bytes
): DarkSwapJoin {
  let darkSwapJoinEvent = changetype<DarkSwapJoin>(newMockEvent())

  darkSwapJoinEvent.parameters = new Array()

  darkSwapJoinEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytesArray(nullifierIn)
    )
  )
  darkSwapJoinEvent.parameters.push(
    new ethereum.EventParam("noteOut1", ethereum.Value.fromFixedBytes(noteOut1))
  )

  return darkSwapJoinEvent
}

export function createDarkSwapProCreateOrderEvent(
  owner: Address,
  outNullifier: Bytes,
  changeNote: Bytes,
  changeNoteFooter: Bytes,
  orderNote: Bytes,
  orderNoteFooter: Bytes
): DarkSwapProCreateOrder {
  let darkSwapProCreateOrderEvent = changetype<DarkSwapProCreateOrder>(
    newMockEvent()
  )

  darkSwapProCreateOrderEvent.parameters = new Array()

  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "outNullifier",
      ethereum.Value.fromFixedBytes(outNullifier)
    )
  )
  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "changeNote",
      ethereum.Value.fromFixedBytes(changeNote)
    )
  )
  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "changeNoteFooter",
      ethereum.Value.fromFixedBytes(changeNoteFooter)
    )
  )
  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderNote",
      ethereum.Value.fromFixedBytes(orderNote)
    )
  )
  darkSwapProCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderNoteFooter",
      ethereum.Value.fromFixedBytes(orderNoteFooter)
    )
  )

  return darkSwapProCreateOrderEvent
}

export function createDarkSwapProSwapEvent(
  aliceOutNullifier: Bytes,
  aliceInNote: Bytes,
  aliceInNoteFooter: Bytes,
  aliceChangeNote: Bytes,
  aliceChangeNoteFooter: Bytes,
  bobOutNullifier: Bytes,
  bobInNote: Bytes,
  bobInNoteFooter: Bytes
): DarkSwapProSwap {
  let darkSwapProSwapEvent = changetype<DarkSwapProSwap>(newMockEvent())

  darkSwapProSwapEvent.parameters = new Array()

  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceOutNullifier",
      ethereum.Value.fromFixedBytes(aliceOutNullifier)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceInNote",
      ethereum.Value.fromFixedBytes(aliceInNote)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceInNoteFooter",
      ethereum.Value.fromFixedBytes(aliceInNoteFooter)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceChangeNote",
      ethereum.Value.fromFixedBytes(aliceChangeNote)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceChangeNoteFooter",
      ethereum.Value.fromFixedBytes(aliceChangeNoteFooter)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobOutNullifier",
      ethereum.Value.fromFixedBytes(bobOutNullifier)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobInNote",
      ethereum.Value.fromFixedBytes(bobInNote)
    )
  )
  darkSwapProSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobInNoteFooter",
      ethereum.Value.fromFixedBytes(bobInNoteFooter)
    )
  )

  return darkSwapProSwapEvent
}

export function createDarkSwapRetailDepositCreateOrderEvent(
  owner: Address,
  depositOutNote: Bytes,
  depositOutNoteFooter: Bytes,
  inNote: Bytes,
  inNoteFooter: Bytes
): DarkSwapRetailDepositCreateOrder {
  let darkSwapRetailDepositCreateOrderEvent =
    changetype<DarkSwapRetailDepositCreateOrder>(newMockEvent())

  darkSwapRetailDepositCreateOrderEvent.parameters = new Array()

  darkSwapRetailDepositCreateOrderEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  darkSwapRetailDepositCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "depositOutNote",
      ethereum.Value.fromFixedBytes(depositOutNote)
    )
  )
  darkSwapRetailDepositCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "depositOutNoteFooter",
      ethereum.Value.fromFixedBytes(depositOutNoteFooter)
    )
  )
  darkSwapRetailDepositCreateOrderEvent.parameters.push(
    new ethereum.EventParam("inNote", ethereum.Value.fromFixedBytes(inNote))
  )
  darkSwapRetailDepositCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "inNoteFooter",
      ethereum.Value.fromFixedBytes(inNoteFooter)
    )
  )

  return darkSwapRetailDepositCreateOrderEvent
}

export function createDarkSwapRetailSwapEvent(
  aliceOutNullifier: Bytes,
  aliceInNote: Bytes,
  aliceInNoteFooter: Bytes,
  bobOutNullifier: Bytes,
  bobInNote: Bytes,
  bobInNoteFooter: Bytes
): DarkSwapRetailSwap {
  let darkSwapRetailSwapEvent = changetype<DarkSwapRetailSwap>(newMockEvent())

  darkSwapRetailSwapEvent.parameters = new Array()

  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceOutNullifier",
      ethereum.Value.fromFixedBytes(aliceOutNullifier)
    )
  )
  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceInNote",
      ethereum.Value.fromFixedBytes(aliceInNote)
    )
  )
  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceInNoteFooter",
      ethereum.Value.fromFixedBytes(aliceInNoteFooter)
    )
  )
  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobOutNullifier",
      ethereum.Value.fromFixedBytes(bobOutNullifier)
    )
  )
  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobInNote",
      ethereum.Value.fromFixedBytes(bobInNote)
    )
  )
  darkSwapRetailSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobInNoteFooter",
      ethereum.Value.fromFixedBytes(bobInNoteFooter)
    )
  )

  return darkSwapRetailSwapEvent
}

export function createDarkSwapWithdrawEvent(
  nullifierIn: Bytes,
  amount: BigInt,
  asset: Address,
  noteRemaining: Bytes,
  recipient: Address
): DarkSwapWithdraw {
  let darkSwapWithdrawEvent = changetype<DarkSwapWithdraw>(newMockEvent())

  darkSwapWithdrawEvent.parameters = new Array()

  darkSwapWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  darkSwapWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  darkSwapWithdrawEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  darkSwapWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "noteRemaining",
      ethereum.Value.fromFixedBytes(noteRemaining)
    )
  )
  darkSwapWithdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return darkSwapWithdrawEvent
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
