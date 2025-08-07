import {
  SablierClaimStream as SablierClaimStreamEvent,
  SablierCreateStream as SablierCreateStreamEvent,
} from "../generated/SablierLinearAssetManager/SablierLinearAssetManager"
import {
  SablierClaimStream,
  SablierCreateStream,
} from "../generated/schema"


export function handleSablierClaimStream(event: SablierClaimStreamEvent): void {
  let entity = new SablierClaimStream(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.asset = event.params.asset
  entity.amountOut = event.params.amountOut
  entity.noteOut = event.params.noteOut
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSablierCreateStream(
  event: SablierCreateStreamEvent,
): void {
  let entity = new SablierCreateStream(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.nft = event.params.nft
  entity.streamIDs = event.params.streamIDs
  entity.notesOut = event.params.notesOut
  entity.noteFooters = event.params.noteFooters

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
