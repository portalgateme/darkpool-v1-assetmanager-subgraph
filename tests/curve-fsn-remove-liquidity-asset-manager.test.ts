import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CurveRemoveLiquidity } from "../generated/schema"
import { CurveRemoveLiquidity as CurveRemoveLiquidityEvent } from "../generated/CurveFSNRemoveLiquidityAssetManager/CurveFSNRemoveLiquidityAssetManager"
import { handleCurveRemoveLiquidity } from "../src/curve-fsn-remove-liquidity-asset-manager"
import { createCurveRemoveLiquidityEvent } from "./curve-fsn-remove-liquidity-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let outPut = ["ethereum.Tuple Not implemented"]
    let newCurveRemoveLiquidityEvent = createCurveRemoveLiquidityEvent(outPut)
    handleCurveRemoveLiquidity(newCurveRemoveLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CurveRemoveLiquidity created and stored", () => {
    assert.entityCount("CurveRemoveLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CurveRemoveLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "outPut",
      "[ethereum.Tuple Not implemented]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
