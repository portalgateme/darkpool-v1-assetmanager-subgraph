import {
  Transfer as TransferEvent,
} from "../generated/TransferAssetManager/TransferAssetManager"
import { Transfer } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.noteOut = event.params.noteOut
  entity.noteFooter = event.params.noteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
