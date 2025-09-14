import {
  Locked as LockedEvent,
  Unlocked as UnlockedEvent,
} from "../generated/StakingAssetManager/StakingAssetManager"
import { Locked, Unlocked } from "../generated/schema"

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
