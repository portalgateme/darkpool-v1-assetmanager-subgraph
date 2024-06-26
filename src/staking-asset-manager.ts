import {
  Locked as LockedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Unlocked as UnlockedEvent,
} from "../generated/StakingAssetManager/StakingAssetManager"
import { Locked, OwnershipTransferred, Unlocked } from "../generated/schema"

export function handleLocked(event: LockedEvent): void {
  let entity = new Locked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.locker = event.params.locker
  entity.assetIn = event.params.assetIn
  entity.assetOut = event.params.assetOut
  entity.amountOut = event.params.amountOut
  entity.noteNullifierIn = event.params.noteNullifierIn
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitmentOut = event.params.noteCommitmentOut

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

export function handleUnlocked(event: UnlockedEvent): void {
  let entity = new Unlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.assetIn = event.params.assetIn
  entity.assetOut = event.params.assetOut
  entity.amountOut = event.params.amountOut
  entity.noteNullifierIn = event.params.noteNullifierIn
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitmentOut = event.params.noteCommitmentOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
