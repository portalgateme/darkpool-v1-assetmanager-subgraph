import {
  NftTransfer as NftTransferEvent,
  NftWithdraw as NftWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/NftAssetManager/NftAssetManager"
import {
  NftTransfer,
  NftWithdraw,
  OwnershipTransferred,
} from "../generated/schema"

export function handleNftTransfer(event: NftTransferEvent): void {
  let entity = new NftTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.amount = event.params.amount
  entity.asset = event.params.asset
  entity.noteOut = event.params.noteOut
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftWithdraw(event: NftWithdrawEvent): void {
  let entity = new NftWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.amount = event.params.amount
  entity.nftAsset = event.params.nftAsset
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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
