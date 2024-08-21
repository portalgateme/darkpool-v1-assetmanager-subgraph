import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  afterAll,
  assert,
  beforeAll,
  clearStore,
  describe,
  test
} from "matchstick-as/assembly/index"
import { handleAerodromeRemoveLiquidity } from "../src/aerodrome-remove-liquidity-asset-manager"
import { createAerodromeRemoveLiquidityEvent } from "./aerodrome-remove-liquidity-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifier = Bytes.fromI32(1234567890)
    let assetsOut = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let amountsOut = [BigInt.fromI32(234)]
    let noteCommitments = [Bytes.fromI32(1234567890)]
    let noteFooters = [Bytes.fromI32(1234567890)]
    let newAerodromeRemoveLiquidityEvent = createAerodromeRemoveLiquidityEvent(
      nullifier,
      assetsOut,
      amountsOut,
      noteCommitments,
      noteFooters
    )
    handleAerodromeRemoveLiquidity(newAerodromeRemoveLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AerodromeRemoveLiquidity created and stored", () => {
    assert.entityCount("AerodromeRemoveLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AerodromeRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifier",
      "1234567890"
    )
    assert.fieldEquals(
      "AerodromeRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetsOut",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "AerodromeRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountsOut",
      "[234]"
    )
    assert.fieldEquals(
      "AerodromeRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteCommitments",
      "[1234567890]"
    )
    assert.fieldEquals(
      "AerodromeRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooters",
      "[1234567890]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
