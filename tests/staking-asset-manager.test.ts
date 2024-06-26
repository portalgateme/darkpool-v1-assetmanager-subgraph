import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { Locked } from "../generated/schema"
import { Locked as LockedEvent } from "../generated/StakingAssetManager/StakingAssetManager"
import { handleLocked } from "../src/staking-asset-manager"
import { createLockedEvent } from "./staking-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let locker = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let assetIn = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let assetOut = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amountOut = BigInt.fromI32(234)
    let noteNullifierIn = Bytes.fromI32(1234567890)
    let noteFooter = Bytes.fromI32(1234567890)
    let noteCommitmentOut = Bytes.fromI32(1234567890)
    let newLockedEvent = createLockedEvent(
      locker,
      assetIn,
      assetOut,
      amountOut,
      noteNullifierIn,
      noteFooter,
      noteCommitmentOut
    )
    handleLocked(newLockedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Locked created and stored", () => {
    assert.entityCount("Locked", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "locker",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetIn",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetOut",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountOut",
      "234"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteNullifierIn",
      "1234567890"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooter",
      "1234567890"
    )
    assert.fieldEquals(
      "Locked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteCommitmentOut",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
