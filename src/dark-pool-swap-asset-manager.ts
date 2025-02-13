import {
  DarkPoolCancelOrder as DarkPoolCancelOrderEvent,
  DarkPoolCreateOrder as DarkPoolCreateOrderEvent,
  DarkPoolSwap as DarkPoolSwapEvent,
} from "../generated/DarkPoolSwapAssetManager/DarkPoolSwapAssetManager"
import {
  DarkPoolCancelOrder,
  DarkPoolCreateOrder,
  DarkPoolSwap,
} from "../generated/schema"

export function handleDarkPoolCancelOrder(
  event: DarkPoolCancelOrderEvent,
): void {
  let entity = new DarkPoolCancelOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkPoolCreateOrder(
  event: DarkPoolCreateOrderEvent,
): void {
  let entity = new DarkPoolCreateOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkPoolSwap(event: DarkPoolSwapEvent): void {
  let entity = new DarkPoolSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.aliceOutNullifierIn = event.params.aliceOutNullifierIn
  entity.botOutnullifierIn = event.params.botOutnullifierIn
  entity.aliceInNote = event.params.aliceInNote
  entity.bobInNote = event.params.bobInNote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
