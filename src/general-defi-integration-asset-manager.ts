import {
  DefiIntegration as DefiIntegrationEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/GeneralDefiIntegrationAssetManager/GeneralDefiIntegrationAssetManager"
import { DefiIntegration, OwnershipTransferred } from "../generated/schema"

export function handleDefiIntegration(event: DefiIntegrationEvent): void {
  let entity = new DefiIntegration(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractAddress = event.params.contractAddress
  entity.nullifiers = event.params.nullifiers
  entity.outNote = event.params.outNote
  entity.outAmount = event.params.outAmount
  entity.noteFooter = event.params.noteFooter

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
