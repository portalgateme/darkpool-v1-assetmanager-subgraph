import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { CurveAddLiquidity } from "../generated/schema"
import { CurveAddLiquidity as CurveAddLiquidityEvent } from "../generated/CurveFSNAddLiquidityAssetManager/CurveFSNAddLiquidityAssetManager"
import { handleCurveAddLiquidity } from "../src/curve-fsn-add-liquidity-asset-manager"
import { createCurveAddLiquidityEvent } from "./curve-fsn-add-liquidity-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifiers = [Bytes.fromI32(1234567890)]
    let noteOut = Bytes.fromI32(1234567890)
    let amountOut = BigInt.fromI32(234)
    let noteFooter = Bytes.fromI32(1234567890)
    let newCurveAddLiquidityEvent = createCurveAddLiquidityEvent(
      nullifiers,
      noteOut,
      amountOut,
      noteFooter
    )
    handleCurveAddLiquidity(newCurveAddLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CurveAddLiquidity created and stored", () => {
    assert.entityCount("CurveAddLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CurveAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifiers",
      "[1234567890]"
    )
    assert.fieldEquals(
      "CurveAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteOut",
      "1234567890"
    )
    assert.fieldEquals(
      "CurveAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountOut",
      "234"
    )
    assert.fieldEquals(
      "CurveAddLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooter",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
