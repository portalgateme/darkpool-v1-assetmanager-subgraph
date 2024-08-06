import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { DefiIntegration } from "../generated/schema"
import { DefiIntegration as DefiIntegrationEvent } from "../generated/GeneralDefiIntegrationAssetManager/GeneralDefiIntegrationAssetManager"
import { handleDefiIntegration } from "../src/general-defi-integration-asset-manager"
import { createDefiIntegrationEvent } from "./general-defi-integration-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contractAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nullifiers = [Bytes.fromI32(1234567890)]
    let outNote = [Bytes.fromI32(1234567890)]
    let outAmount = [BigInt.fromI32(234)]
    let noteFooter = [Bytes.fromI32(1234567890)]
    let newDefiIntegrationEvent = createDefiIntegrationEvent(
      contractAddress,
      nullifiers,
      outNote,
      outAmount,
      noteFooter
    )
    handleDefiIntegration(newDefiIntegrationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DefiIntegration created and stored", () => {
    assert.entityCount("DefiIntegration", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DefiIntegration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DefiIntegration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifiers",
      "[1234567890]"
    )
    assert.fieldEquals(
      "DefiIntegration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "outNote",
      "[1234567890]"
    )
    assert.fieldEquals(
      "DefiIntegration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "outAmount",
      "[234]"
    )
    assert.fieldEquals(
      "DefiIntegration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooter",
      "[1234567890]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
