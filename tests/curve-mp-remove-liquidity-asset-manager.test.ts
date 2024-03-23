import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { CurveAddLiquidity } from "../generated/schema"
import { CurveAddLiquidity as CurveAddLiquidityEvent } from "../generated/CurveMPRemoveLiquidityAssetManager/CurveMPRemoveLiquidityAssetManager"
import { handleCurveAddLiquidity } from "../src/curve-mp-remove-liquidity-asset-manager"
import { createCurveAddLiquidityEvent } from "./curve-mp-remove-liquidity-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifiers = [Bytes.fromI32(1234567890)]
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let amountOut = BigInt.fromI32(234)
    let noteOut = Bytes.fromI32(1234567890)
    let noteFooter = Bytes.fromI32(1234567890)
    let newCurveAddLiquidityEvent = createCurveAddLiquidityEvent(
      nullifiers,
      asset,
      amountOut,
      noteOut,
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
      "asset",
      "0x0000000000000000000000000000000000000001"
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
      "noteOut",
      "1234567890"
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
