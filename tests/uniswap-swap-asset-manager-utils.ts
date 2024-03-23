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
  assetOut: Address,
  amountOut: BigInt,
  noteNullifierIn: Bytes,
  noteFooter: Bytes,
  noteCommitmentOut: Bytes
): UniswapSwap {
  let uniswapSwapEvent = changetype<UniswapSwap>(newMockEvent())

  uniswapSwapEvent.parameters = new Array()

  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam("assetOut", ethereum.Value.fromAddress(assetOut))
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
      "noteFooter",
      ethereum.Value.fromFixedBytes(noteFooter)
    )
  )
  uniswapSwapEvent.parameters.push(
    new ethereum.EventParam(
      "noteCommitmentOut",
      ethereum.Value.fromFixedBytes(noteCommitmentOut)
    )
  )

  return uniswapSwapEvent
}
