import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  UniswapCollectFees,
  UniswapLiquidityProvision,
  UniswapRemoveLiquidity
} from "../generated/UniswapLiquidityAssetManager/UniswapLiquidityAssetManager"

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

export function createUniswapCollectFeesEvent(
  tokenId: BigInt,
  amounts: Array<BigInt>,
  feeNoteCommitments: Array<BigInt>
): UniswapCollectFees {
  let uniswapCollectFeesEvent = changetype<UniswapCollectFees>(newMockEvent())

  uniswapCollectFeesEvent.parameters = new Array()

  uniswapCollectFeesEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  uniswapCollectFeesEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  uniswapCollectFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feeNoteCommitments",
      ethereum.Value.fromUnsignedBigIntArray(feeNoteCommitments)
    )
  )

  return uniswapCollectFeesEvent
}

export function createUniswapLiquidityProvisionEvent(
  tokenId: BigInt,
  positionNote: BigInt,
  nullifiers: Array<Bytes>,
  changeAmounts: Array<BigInt>,
  changeNoteCommitments: Array<BigInt>,
  changeNoteFooters: Array<Bytes>
): UniswapLiquidityProvision {
  let uniswapLiquidityProvisionEvent = changetype<UniswapLiquidityProvision>(
    newMockEvent()
  )

  uniswapLiquidityProvisionEvent.parameters = new Array()

  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "positionNote",
      ethereum.Value.fromUnsignedBigInt(positionNote)
    )
  )
  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "nullifiers",
      ethereum.Value.fromFixedBytesArray(nullifiers)
    )
  )
  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "changeAmounts",
      ethereum.Value.fromUnsignedBigIntArray(changeAmounts)
    )
  )
  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "changeNoteCommitments",
      ethereum.Value.fromUnsignedBigIntArray(changeNoteCommitments)
    )
  )
  uniswapLiquidityProvisionEvent.parameters.push(
    new ethereum.EventParam(
      "changeNoteFooters",
      ethereum.Value.fromFixedBytesArray(changeNoteFooters)
    )
  )

  return uniswapLiquidityProvisionEvent
}

export function createUniswapRemoveLiquidityEvent(
  tokenId: BigInt,
  positionNullifier: Bytes,
  amounts: Array<BigInt>,
  outNoteCommitments: Array<BigInt>
): UniswapRemoveLiquidity {
  let uniswapRemoveLiquidityEvent = changetype<UniswapRemoveLiquidity>(
    newMockEvent()
  )

  uniswapRemoveLiquidityEvent.parameters = new Array()

  uniswapRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  uniswapRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "positionNullifier",
      ethereum.Value.fromFixedBytes(positionNullifier)
    )
  )
  uniswapRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  uniswapRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "outNoteCommitments",
      ethereum.Value.fromUnsignedBigIntArray(outNoteCommitments)
    )
  )

  return uniswapRemoveLiquidityEvent
}
