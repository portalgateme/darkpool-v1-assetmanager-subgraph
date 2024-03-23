import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  Join,
  JoinSplit,
  OwnershipTransferred,
  Split,
  Transfer,
  Withdraw
} from "../generated/DarkpoolAssetManager/DarkpoolAssetManager"

export function createDepositEvent(
  depositor: Address,
  noteOut: Bytes,
  amount: BigInt,
  asset: Address
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )

  return depositEvent
}

export function createJoinEvent(
  nullifierIn1: Bytes,
  nullifierIn2: Bytes,
  noteOut1: Bytes
): Join {
  let joinEvent = changetype<Join>(newMockEvent())

  joinEvent.parameters = new Array()

  joinEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn1",
      ethereum.Value.fromFixedBytes(nullifierIn1)
    )
  )
  joinEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn2",
      ethereum.Value.fromFixedBytes(nullifierIn2)
    )
  )
  joinEvent.parameters.push(
    new ethereum.EventParam("noteOut1", ethereum.Value.fromFixedBytes(noteOut1))
  )

  return joinEvent
}

export function createJoinSplitEvent(
  nullifierIn1: Bytes,
  nullifierIn2: Bytes,
  noteOut1: Bytes,
  noteOut2: Bytes
): JoinSplit {
  let joinSplitEvent = changetype<JoinSplit>(newMockEvent())

  joinSplitEvent.parameters = new Array()

  joinSplitEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn1",
      ethereum.Value.fromFixedBytes(nullifierIn1)
    )
  )
  joinSplitEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn2",
      ethereum.Value.fromFixedBytes(nullifierIn2)
    )
  )
  joinSplitEvent.parameters.push(
    new ethereum.EventParam("noteOut1", ethereum.Value.fromFixedBytes(noteOut1))
  )
  joinSplitEvent.parameters.push(
    new ethereum.EventParam("noteOut2", ethereum.Value.fromFixedBytes(noteOut2))
  )

  return joinSplitEvent
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

export function createSplitEvent(
  nullifierIn: Bytes,
  noteOut1: Bytes,
  noteOut2: Bytes
): Split {
  let splitEvent = changetype<Split>(newMockEvent())

  splitEvent.parameters = new Array()

  splitEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  splitEvent.parameters.push(
    new ethereum.EventParam("noteOut1", ethereum.Value.fromFixedBytes(noteOut1))
  )
  splitEvent.parameters.push(
    new ethereum.EventParam("noteOut2", ethereum.Value.fromFixedBytes(noteOut2))
  )

  return splitEvent
}

export function createTransferEvent(
  nullifierIn: Bytes,
  amount: BigInt,
  asset: Address,
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
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
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

export function createWithdrawEvent(
  nullifierIn: Bytes,
  amount: BigInt,
  asset: Address,
  recipient: Address
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierIn",
      ethereum.Value.fromFixedBytes(nullifierIn)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return withdrawEvent
}
