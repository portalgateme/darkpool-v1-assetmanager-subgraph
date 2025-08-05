import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  TheDeepDeposit,
  TheDeepWithdrawal
} from "../generated/TheDeepVaultAssetManager/TheDeepVaultAssetManager"

export function createTheDeepDepositEvent(
  depositor: Address,
  noteFooter: Bytes,
  noteOut: Bytes,
  amount: BigInt,
  asset: Address,
  nullifier: Bytes
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
  theDeepDepositEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )

  return theDeepDepositEvent
}

export function createTheDeepWithdrawalEvent(
  nullifier: Bytes,
  receipt: Address,
  assetsOut: Array<Address>,
  amountsOut: Array<BigInt>
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
    new ethereum.EventParam("receipt", ethereum.Value.fromAddress(receipt))
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

  return theDeepWithdrawalEvent
}
