import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { DarkSwapCancelOrder } from "../generated/schema"
import { DarkSwapCancelOrder as DarkSwapCancelOrderEvent } from "../generated/DarkSwapAssetManager/DarkSwapAssetManager"
import { handleDarkSwapCancelOrder } from "../src/dark-swap-asset-manager"
import { createDarkSwapCancelOrderEvent } from "./dark-swap-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let orderNullifier = Bytes.fromI32(1234567890)
    let remainingNullifier = Bytes.fromI32(1234567890)
    let accountNote = Bytes.fromI32(1234567890)
    let accountNoteFooter = Bytes.fromI32(1234567890)
    let newDarkSwapCancelOrderEvent = createDarkSwapCancelOrderEvent(
      owner,
      orderNullifier,
      remainingNullifier,
      accountNote,
      accountNoteFooter
    )
    handleDarkSwapCancelOrder(newDarkSwapCancelOrderEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DarkSwapCancelOrder created and stored", () => {
    assert.entityCount("DarkSwapCancelOrder", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DarkSwapCancelOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DarkSwapCancelOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "orderNullifier",
      "1234567890"
    )
    assert.fieldEquals(
      "DarkSwapCancelOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "remainingNullifier",
      "1234567890"
    )
    assert.fieldEquals(
      "DarkSwapCancelOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accountNote",
      "1234567890"
    )
    assert.fieldEquals(
      "DarkSwapCancelOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accountNoteFooter",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
