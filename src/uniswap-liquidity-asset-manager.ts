import { Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred as OwnershipTransferredEvent,
  UniswapCollectFees as UniswapCollectFeesEvent,
  UniswapLiquidityProvision as UniswapLiquidityProvisionEvent,
  UniswapRemoveLiquidity as UniswapRemoveLiquidityEvent,
} from "../generated/UniswapLiquidityAssetManager/UniswapLiquidityAssetManager"
import {
  OwnershipTransferred,
  UniswapCollectFee,
  UniswapLiquidityProvision,
  UniswapRemoveLiquidity,
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUniswapCollectFees(event: UniswapCollectFeesEvent): void {
  let entity = new UniswapCollectFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.assets = event.params.assets.map<Bytes>((value)=> value as Bytes)
  entity.amounts = event.params.amounts
  entity.feeNoteCommitments = event.params.feeNoteCommitments
  entity.feeNoteFooters = event.params.feeNoteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUniswapLiquidityProvision(
  event: UniswapLiquidityProvisionEvent,
): void {
  let entity = new UniswapLiquidityProvision(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.positionNote = event.params.positionNote
  entity.nullifiers = event.params.nullifiers
  entity.changeAmounts = event.params.changeAmounts
  entity.changeNoteCommitments = event.params.changeNoteCommitments
  entity.changeNoteFooters = event.params.changeNoteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUniswapRemoveLiquidity(
  event: UniswapRemoveLiquidityEvent,
): void {
  let entity = new UniswapRemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.positionNullifier = event.params.positionNullifier
  entity.amounts = event.params.amounts
  entity.outNoteCommitments = event.params.outNoteCommitments
  entity.outNoteFooters = event.params.outNoteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
