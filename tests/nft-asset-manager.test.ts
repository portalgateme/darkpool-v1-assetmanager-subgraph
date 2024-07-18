import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { NftTransfer } from "../generated/schema"
import { NftTransfer as NftTransferEvent } from "../generated/NftAssetManager/NftAssetManager"
import { handleNftTransfer } from "../src/nft-asset-manager"
import { createNftTransferEvent } from "./nft-asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nullifierIn = Bytes.fromI32(1234567890)
    let amount = BigInt.fromI32(234)
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let noteOut = Bytes.fromI32(1234567890)
    let noteFooter = Bytes.fromI32(1234567890)
    let newNftTransferEvent = createNftTransferEvent(
      nullifierIn,
      amount,
      asset,
      noteOut,
      noteFooter
    )
    handleNftTransfer(newNftTransferEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NftTransfer created and stored", () => {
    assert.entityCount("NftTransfer", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NftTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nullifierIn",
      "1234567890"
    )
    assert.fieldEquals(
      "NftTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "NftTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asset",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NftTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteOut",
      "1234567890"
    )
    assert.fieldEquals(
      "NftTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noteFooter",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
