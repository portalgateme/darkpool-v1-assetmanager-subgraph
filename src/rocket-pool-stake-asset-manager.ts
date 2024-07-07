import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RocketDeposit as RocketDepositEvent,
  RocketWithdrawal as RocketWithdrawalEvent,
} from "../generated/RocketPoolStakeAssetManager/RocketPoolStakeAssetManager"
import {
  OwnershipTransferred,
  RocketDeposit,
  RocketWithdrawal,
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

export function handleRocketDeposit(event: RocketDepositEvent): void {
  let entity = new RocketDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.amount = event.params.amount
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitment = event.params.noteCommitment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRocketWithdrawal(event: RocketWithdrawalEvent): void {
  let entity = new RocketWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.amount = event.params.amount
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitment = event.params.noteCommitment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
