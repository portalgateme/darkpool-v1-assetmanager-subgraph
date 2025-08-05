import { Bytes } from "@graphprotocol/graph-ts"
import {
  TheDeepDeposit as TheDeepDepositEvent,
  TheDeepWithdrawal as TheDeepWithdrawalEvent,
} from "../generated/TheDeepVaultAssetManager/TheDeepVaultAssetManager"
import {
  TheDeepDeposit,
  TheDeepWithdrawal,
} from "../generated/schema"

export function handleTheDeepDeposit(event: TheDeepDepositEvent): void {
  let entity = new TheDeepDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.depositor = event.params.depositor
  entity.noteFooter = event.params.noteFooter
  entity.noteOut = event.params.noteOut
  entity.amount = event.params.amount
  entity.asset = event.params.asset
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTheDeepWithdrawal(event: TheDeepWithdrawalEvent): void {
  let entity = new TheDeepWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.receipt = event.params.receipt
  entity.assetsOut = event.params.assetsOut.map<Bytes>((value)=> value as Bytes)
  entity.amountsOut = event.params.amountsOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
