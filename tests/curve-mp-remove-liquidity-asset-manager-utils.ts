import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  CurveRemoveLiquidity,
  OwnershipTransferred
} from "../generated/CurveMPRemoveLiquidityAssetManager/CurveMPRemoveLiquidityAssetManager"

export function createCurveRemoveLiquidityEvent(
  outPut: Array<ethereum.Tuple>
): CurveRemoveLiquidity {
  let curveRemoveLiquidityEvent = changetype<CurveRemoveLiquidity>(
    newMockEvent()
  )

  curveRemoveLiquidityEvent.parameters = new Array()

  curveRemoveLiquidityEvent.parameters.push(
    new ethereum.EventParam("outPut", ethereum.Value.fromTupleArray(outPut))
  )

  return curveRemoveLiquidityEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
