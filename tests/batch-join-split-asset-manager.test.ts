import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { BatchJoinSplit } from "../generated/schema"
import { BatchJoinSplit as BatchJoinSplitEvent } from "../generated/BatchJoinSplitAssetManager/BatchJoinSplitAssetManager"
import { handleBatchJoinSplit } from "../src/batch-join-split-asset-manager"
import { createBatchJoinSplitEvent } from "./batch-join-split-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifiersIn = [Bytes.fromI32(1234567890)]
    let notesOut = [Bytes.fromI32(1234567890)]
    let newBatchJoinSplitEvent = createBatchJoinSplitEvent(
      nullifiersIn,
      notesOut
    )
    handleBatchJoinSplit(newBatchJoinSplitEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BatchJoinSplit created and stored", () => {
    assert.entityCount("BatchJoinSplit", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BatchJoinSplit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifiersIn",
      "[1234567890]"
    )
    assert.fieldEquals(
      "BatchJoinSplit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "notesOut",
      "[1234567890]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
