import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AerodromeAddLiquidity,
  AerodromeZapIn,
} from "../generated/AerodromeAddLiquidityAssetManager/AerodromeAddLiquidityAssetManager"

export function createAerodromeAddLiquidityEvent(
  nullifiers: Array<Bytes>,
  assetsOut: Array<Address>,
  amountsOut: Array<BigInt>,
  noteCommitments: Array<Bytes>,
  noteFooters: Array<Bytes>
): AerodromeAddLiquidity {
  let aerodromeAddLiquidityEvent = changetype<AerodromeAddLiquidity>(
    newMockEvent()
  )

  aerodromeAddLiquidityEvent.parameters = new Array()

  aerodromeAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiers",
      ethereum.Value.fromFixedBytesArray(nullifiers)
    )
  )
  aerodromeAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "assetsOut",
      ethereum.Value.fromAddressArray(assetsOut)
    )
  )
  aerodromeAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountsOut",
      ethereum.Value.fromUnsignedBigIntArray(amountsOut)
    )
  )
  aerodromeAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitments",
      ethereum.Value.fromFixedBytesArray(noteCommitments)
    )
  )
  aerodromeAddLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )

  return aerodromeAddLiquidityEvent
}

export function createAerodromeZapInEvent(
  nullifier: Bytes,
  assetOut: Address,
  amountOut: BigInt,
  noteCommitment: Bytes,
  noteFooter: Bytes
): AerodromeZapIn {
  let aerodromeZapInEvent = changetype<AerodromeZapIn>(newMockEvent())

  aerodromeZapInEvent.parameters = new Array()

  aerodromeZapInEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  aerodromeZapInEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  aerodromeZapInEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  aerodromeZapInEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitment",
      ethereum.Value.fromFixedBytes(noteCommitment)
    )
  )
  aerodromeZapInEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return aerodromeZapInEvent
}
