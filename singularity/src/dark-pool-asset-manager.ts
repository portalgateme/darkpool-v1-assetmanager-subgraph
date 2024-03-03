import {
  Deposit as DepositEvent,
  Join as JoinEvent,
  JoinSplit as JoinSplitEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Split as SplitEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent
} from "../generated/DarkPoolAssetManager/DarkPoolAssetManager"
import {
  Deposit,
  Join,
  JoinSplit,
  OwnershipTransferred,
  Split,
  Transfer,
  Withdraw
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.noteOut = event.params.noteOut
  entity.amount = event.params.amount
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJoin(event: JoinEvent): void {
  let entity = new Join(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nullifierIn1 = event.params.nullifierIn1
  entity.nullifierIn2 = event.params.nullifierIn2
  entity.noteOut1 = event.params.noteOut1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJoinSplit(event: JoinSplitEvent): void {
  let entity = new JoinSplit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSplit(event: SplitEvent): void {
  let entity = new Split(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.noteOut1 = event.params.noteOut1
  entity.noteOut2 = event.params.noteOut2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.noteOut = event.params.noteOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nullifierIn = event.params.nullifierIn
  entity.amount = event.params.amount
  entity.asset = event.params.asset
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
