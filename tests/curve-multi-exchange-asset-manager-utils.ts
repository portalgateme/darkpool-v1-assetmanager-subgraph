import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CurveExchange,
  OwnershipTransferred
} from "../generated/CurveMultiExchangeAssetManager/CurveMultiExchangeAssetManager"

export function createCurveExchangeEvent(
  nullifiers: Bytes,
  assetOut: Address,
  amountOut: BigInt,
  noteOut: Bytes,
  noteFooter: Bytes
): CurveExchange {
  let curveExchangeEvent = changetype<CurveExchange>(newMockEvent())

  curveExchangeEvent.parameters = new Array()

  curveExchangeEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiers",
      ethereum.Value.fromFixedBytes(nullifiers)
    )
  )
  curveExchangeEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  curveExchangeEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  curveExchangeEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  curveExchangeEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return curveExchangeEvent
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
