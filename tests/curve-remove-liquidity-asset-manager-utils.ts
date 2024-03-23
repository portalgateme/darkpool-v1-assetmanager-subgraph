import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CurveAddLiquidity,
  CurveRemoveLiquidity,
  OwnershipTransferred
} from "../generated/CurveRemoveLiquidityAssetManager/CurveRemoveLiquidityAssetManager"

export function createCurveAddLiquidityEvent(
  nullifiers: Array<Bytes>,
  asset: Address,
  amountOut: BigInt,
  noteOut: Bytes,
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
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam("noteOut", ethereum.Value.fromFixedBytes(noteOut))
  )
  curveAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return curveAddLiquidityEvent
}

export function createCurveRemoveLiquidityEvent(
  nullifier: Bytes,
  assets: Array<Address>,
  amountsOut: Array<BigInt>,
  notesOut: Array<Bytes>,
  noteFooters: Array<Bytes>
): CurveRemoveLiquidity {
  let curveRemoveLiquidityEvent = changetype<CurveRemoveLiquidity>(
    newMockEvent()
  )

  curveRemoveLiquidityEvent.parameters = new Array()

  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromAddressArray(assets))
  )
  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountsOut",
      ethereum.Value.fromUnsignedBigIntArray(amountsOut)
    )
  )
  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "notesOut",
      ethereum.Value.fromFixedBytesArray(notesOut)
    )
  )
  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )

  return curveRemoveLiquidityEvent
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
