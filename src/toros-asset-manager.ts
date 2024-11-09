import { Bytes } from "@graphprotocol/graph-ts"
import {
  TorosDeposit as TorosDepositEvent,
  TorosWithdrawal as TorosWithdrawalEvent,
} from "../generated/TorosAssetManager/TorosAssetManager"
import {
  TorosDeposit,
  TorosWithdrawal
} from "../generated/schema"

export function handleTorosDeposit(
  event: TorosDepositEvent,
): void {
  let entity = new TorosDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.tokenId = event.params.tokenId
  entity.noteFooter = event.params.noteFooter
  entity.noteCommitment = event.params.noteCommitment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTorosWithdrawal(event: TorosWithdrawalEvent): void {
  let entity = new TorosWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.asset = event.params.asset.map<Bytes>((value)=> value as Bytes)
  entity.amount = event.params.amount
  entity.noteCommitments = event.params.noteCommitments
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
