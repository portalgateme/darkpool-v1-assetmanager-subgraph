import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { newMockEvent } from "matchstick-as"
import {
  AerodromeRemoveLiquidity,
  AerodromeZapOut
} from "../generated/AerodromeRemoveLiquidityAssetManager/AerodromeRemoveLiquidityAssetManager"

export function createAerodromeRemoveLiquidityEvent(
  nullifier: Bytes,
  assetsOut: Array<Address>,
  amountsOut: Array<BigInt>,
  noteCommitments: Array<Bytes>,
  noteFooters: Array<Bytes>
): AerodromeRemoveLiquidity {
  let aerodromeRemoveLiquidityEvent = changetype<AerodromeRemoveLiquidity>(
    newMockEvent()
  )

  aerodromeRemoveLiquidityEvent.parameters = new Array()

  aerodromeRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  aerodromeRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "assetsOut",
      ethereum.Value.fromAddressArray(assetsOut)
    )
  )
  aerodromeRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountsOut",
      ethereum.Value.fromUnsignedBigIntArray(amountsOut)
    )
  )
  aerodromeRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitments",
      ethereum.Value.fromFixedBytesArray(noteCommitments)
    )
  )
  aerodromeRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )

  return aerodromeRemoveLiquidityEvent
}

export function createAerodromeZapOutEvent(
  nullifier: Bytes,
  assetOut: Array<Address>,
  amountOut: Array<BigInt>,
  noteCommitments: Array<Bytes>,
  noteFooters: Array<Bytes>
): AerodromeZapOut {
  let aerodromeZapOutEvent = changetype<AerodromeZapOut>(newMockEvent())

  aerodromeZapOutEvent.parameters = new Array()

  aerodromeZapOutEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  aerodromeZapOutEvent.parameters.push(
    new ethereum.EventParam(
      "assetOut",
      ethereum.Value.fromAddressArray(assetOut)
    )
  )
  aerodromeZapOutEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigIntArray(amountOut)
    )
  )
  aerodromeZapOutEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitments",
      ethereum.Value.fromFixedBytesArray(noteCommitments)
    )
  )
  aerodromeZapOutEvent.parameters.push(
    new ethereum.EventParam(
      "noteFooters",
      ethereum.Value.fromFixedBytesArray(noteFooters)
    )
  )

  return aerodromeZapOutEvent
}
