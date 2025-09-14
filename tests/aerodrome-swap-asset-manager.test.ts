import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  afterAll,
  assert,
  beforeAll,
  clearStore,
  describe,
  test
} from "matchstick-as/assembly/index"
import { handleAerodromeSwap } from "../src/aerodrome-swap-asset-manager"
import { createAerodromeSwapEvent } from "./aerodrome-swap-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifier = Bytes.fromI32(1234567890)
    let assetOut = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amountOut = BigInt.fromI32(234)
    let noteCommitment = Bytes.fromI32(1234567890)
    let noteFooter = Bytes.fromI32(1234567890)
    let newAerodromeSwapEvent = createAerodromeSwapEvent(
      nullifier,
      assetOut,
      amountOut,
      noteCommitment,
      noteFooter
    )
    handleAerodromeSwap(newAerodromeSwapEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AerodromeSwap created and stored", () => {
    assert.entityCount("AerodromeSwap", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AerodromeSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifier",
      "1234567890"
    )
    assert.fieldEquals(
      "AerodromeSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetOut",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AerodromeSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountOut",
      "234"
    )
    assert.fieldEquals(
      "AerodromeSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteCommitment",
      "1234567890"
    )
    assert.fieldEquals(
      "AerodromeSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooter",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
