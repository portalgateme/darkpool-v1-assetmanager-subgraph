import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  afterAll,
  assert,
  beforeAll,
  clearStore,
  describe,
  test
} from "matchstick-as/assembly/index"
import { handleAerodromeAddLiquidity } from "../src/aerodrome-add-liquidity-asset-manager"
import { createAerodromeAddLiquidityEvent } from "./aerodrome-add-liquidity-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifiers = [Bytes.fromI32(1234567890)]
    let assetsOut = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let amountsOut = [BigInt.fromI32(234)]
    let noteCommitments = [Bytes.fromI32(1234567890)]
    let noteFooters = [Bytes.fromI32(1234567890)]
    let newAerodromeAddLiquidityEvent = createAerodromeAddLiquidityEvent(
      nullifiers,
      assetsOut,
      amountsOut,
      noteCommitments,
      noteFooters
    )
    handleAerodromeAddLiquidity(newAerodromeAddLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AerodromeAddLiquidity created and stored", () => {
    assert.entityCount("AerodromeAddLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AerodromeAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifiers",
      "[1234567890]"
    )
    assert.fieldEquals(
      "AerodromeAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetsOut",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "AerodromeAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountsOut",
      "[234]"
    )
    assert.fieldEquals(
      "AerodromeAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteCommitments",
      "[1234567890]"
    )
    assert.fieldEquals(
      "AerodromeAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooters",
      "[1234567890]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
