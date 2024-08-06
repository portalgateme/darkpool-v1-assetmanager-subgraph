import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Swap as SwapEvent,
} from "../generated/OTCSwapAssetManager/OTCSwapAssetManager"
import { OwnershipTransferred, Swap } from "../generated/schema"

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

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn1 = event.params.nullifierIn1
  entity.nullifierIn2 = event.params.nullifierIn2
  entity.noteOut1 = event.params.noteOut1
  entity.noteOut2 = event.params.noteOut2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
