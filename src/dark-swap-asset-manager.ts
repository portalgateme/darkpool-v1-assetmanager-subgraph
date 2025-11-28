import {
  DarkSwapCancelOrder as DarkSwapCancelOrderEvent,
  DarkSwapCancelOrderWithdraw as DarkSwapCancelOrderWithdrawEvent,
  DarkSwapDeposit as DarkSwapDepositEvent,
  DarkSwapJoin as DarkSwapJoinEvent,
  DarkSwapProCreateOrder as DarkSwapProCreateOrderEvent,
  DarkSwapProSwap as DarkSwapProSwapEvent,
  DarkSwapRetailDepositCreateOrder as DarkSwapRetailDepositCreateOrderEvent,
  DarkSwapRetailSwap as DarkSwapRetailSwapEvent,
  DarkSwapWithdraw as DarkSwapWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/DarkSwapAssetManager/DarkSwapAssetManager"
import {
  DarkSwapCancelOrder,
  DarkSwapCancelOrderWithdraw,
  DarkSwapDeposit,
  DarkSwapJoin,
  DarkSwapProCreateOrder,
  DarkSwapProSwap,
  DarkSwapRetailDepositCreateOrder,
  DarkSwapRetailSwap,
  DarkSwapWithdraw,
} from "../generated/schema"

export function handleDarkSwapCancelOrder(
  event: DarkSwapCancelOrderEvent,
): void {
  let entity = new DarkSwapCancelOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.orderNullifier = event.params.orderNullifier
  entity.remainingNullifier = event.params.remainingNullifier
  entity.accountNote = event.params.accountNote
  entity.accountNoteFooter = event.params.accountNoteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapCancelOrderWithdraw(
  event: DarkSwapCancelOrderWithdrawEvent,
): void {
  let entity = new DarkSwapCancelOrderWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifier = event.params.nullifier
  entity.recipient = event.params.recipient
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapDeposit(event: DarkSwapDepositEvent): void {
  let entity = new DarkSwapDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.depositor = event.params.depositor
  entity.noteOut = event.params.noteOut
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapJoin(event: DarkSwapJoinEvent): void {
  let entity = new DarkSwapJoin(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.noteOut1 = event.params.noteOut1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapProCreateOrder(
  event: DarkSwapProCreateOrderEvent,
): void {
  let entity = new DarkSwapProCreateOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.outNullifier = event.params.outNullifier
  entity.changeNote = event.params.changeNote
  entity.changeNoteFooter = event.params.changeNoteFooter
  entity.orderNote = event.params.orderNote
  entity.orderNoteFooter = event.params.orderNoteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapProSwap(event: DarkSwapProSwapEvent): void {
  let entity = new DarkSwapProSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.aliceOutNullifier = event.params.aliceOutNullifier
  entity.aliceInNote = event.params.aliceInNote
  entity.aliceInNoteFooter = event.params.aliceInNoteFooter
  entity.aliceChangeNote = event.params.aliceChangeNote
  entity.aliceChangeNoteFooter = event.params.aliceChangeNoteFooter
  entity.bobOutNullifier = event.params.bobOutNullifier
  entity.bobInNote = event.params.bobInNote
  entity.bobInNoteFooter = event.params.bobInNoteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapRetailDepositCreateOrder(
  event: DarkSwapRetailDepositCreateOrderEvent,
): void {
  let entity = new DarkSwapRetailDepositCreateOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.depositOutNote = event.params.depositOutNote
  entity.depositOutNoteFooter = event.params.depositOutNoteFooter
  entity.inNote = event.params.inNote
  entity.inNoteFooter = event.params.inNoteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapRetailSwap(event: DarkSwapRetailSwapEvent): void {
  let entity = new DarkSwapRetailSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.aliceOutNullifier = event.params.aliceOutNullifier
  entity.aliceInNote = event.params.aliceInNote
  entity.aliceInNoteFooter = event.params.aliceInNoteFooter
  entity.bobOutNullifier = event.params.bobOutNullifier
  entity.bobInNote = event.params.bobInNote
  entity.bobInNoteFooter = event.params.bobInNoteFooter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDarkSwapWithdraw(event: DarkSwapWithdrawEvent): void {
  let entity = new DarkSwapWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.amount = event.params.amount
  entity.asset = event.params.asset
  entity.noteRemaining = event.params.noteRemaining
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}