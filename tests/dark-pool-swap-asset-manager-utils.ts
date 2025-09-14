import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  DarkPoolCancelOrder,
  DarkPoolCreateOrder,
  DarkPoolSwap
} from "../generated/DarkPoolSwapAssetManager/DarkPoolSwapAssetManager"

export function createDarkPoolCancelOrderEvent(
  nullifier: Bytes
): DarkPoolCancelOrder {
  let darkPoolCancelOrderEvent = changetype<DarkPoolCancelOrder>(newMockEvent())

  darkPoolCancelOrderEvent.parameters = new Array()

  darkPoolCancelOrderEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )

  return darkPoolCancelOrderEvent
}

export function createDarkPoolCreateOrderEvent(
  nullifier: Bytes
): DarkPoolCreateOrder {
  let darkPoolCreateOrderEvent = changetype<DarkPoolCreateOrder>(newMockEvent())

  darkPoolCreateOrderEvent.parameters = new Array()

  darkPoolCreateOrderEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )

  return darkPoolCreateOrderEvent
}

export function createDarkPoolSwapEvent(
  aliceOutNullifierIn: Bytes,
  botOutnullifierIn: Bytes,
  aliceInNote: Bytes,
  bobInNote: Bytes
): DarkPoolSwap {
  let darkPoolSwapEvent = changetype<DarkPoolSwap>(newMockEvent())

  darkPoolSwapEvent.parameters = new Array()

  darkPoolSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceOutNullifierIn",
      ethereum.Value.fromFixedBytes(aliceOutNullifierIn)
    )
  )
  darkPoolSwapEvent.parameters.push(
    new ethereum.EventParam(
      "botOutnullifierIn",
      ethereum.Value.fromFixedBytes(botOutnullifierIn)
    )
  )
  darkPoolSwapEvent.parameters.push(
    new ethereum.EventParam(
      "aliceInNote",
      ethereum.Value.fromFixedBytes(aliceInNote)
    )
  )
  darkPoolSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bobInNote",
      ethereum.Value.fromFixedBytes(bobInNote)
    )
  )

  return darkPoolSwapEvent
}
