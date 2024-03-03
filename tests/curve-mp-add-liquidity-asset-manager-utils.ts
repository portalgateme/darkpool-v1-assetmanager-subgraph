import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CurveAddLiquidity,
  OwnershipTransferred
} from "../generated/CurveMPAddLiquidityAssetManager/CurveMPAddLiquidityAssetManager"

export function createCurveAddLiquidityEvent(
  nullifiers: Array<Bytes>,
  noteOut: Bytes,
  amountOut: BigInt,
  noteFooter: Bytes
): CurveAddLiquidity {
  let curveAddLiquidityEvent = changetype<CurveAddLiquidity>(newMockEvent())

  curveAddLiquidityEvent.parameters = new Array()

  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiers",
      ethereum.Value.fromFixedBytesArray(nullifiers)
    )
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return curveAddLiquidityEvent
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
