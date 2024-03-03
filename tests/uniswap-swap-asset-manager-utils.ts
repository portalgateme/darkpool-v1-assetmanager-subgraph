import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  UniswapSwap
} from "../generated/UniswapSwapAssetManager/UniswapSwapAssetManager"

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

export function createUniswapSwapEvent(
  assetIn: Address,
  assetOut: Address,
  amountIn: BigInt,
  amountOut: BigInt,
  noteNullifierIn: Bytes,
  noteCommitmentOut: BigInt
): UniswapSwap {
  let uniswapSwapEvent = changetype<UniswapSwap>(newMockEvent())

  uniswapSwapEvent.parameters = new Array()

  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam("assetIn", ethereum.Value.fromAddress(assetIn))
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam(
      "noteNullifierIn",
      ethereum.Value.fromFixedBytes(noteNullifierIn)
    )
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitmentOut",
      ethereum.Value.fromUnsignedBigInt(noteCommitmentOut)
    )
  )

  return uniswapSwapEvent
}
