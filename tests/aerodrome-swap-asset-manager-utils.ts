import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { newMockEvent } from "matchstick-as"
import {
  AerodromeSwap
} from "../generated/AerodromeSwapAssetManager/AerodromeSwapAssetManager"

export function createAerodromeSwapEvent(
  nullifier: Bytes,
  assetOut: Address,
  amountOut: BigInt,
  noteCommitment: Bytes,
  noteFooter: Bytes
): AerodromeSwap {
  let aerodromeSwapEvent = changetype<AerodromeSwap>(newMockEvent())

  aerodromeSwapEvent.parameters = new Array()

  aerodromeSwapEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  aerodromeSwapEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  aerodromeSwapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  aerodromeSwapEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitment",
      ethereum.Value.fromFixedBytes(noteCommitment)
    )
  )
  aerodromeSwapEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )

  return aerodromeSwapEvent
}
