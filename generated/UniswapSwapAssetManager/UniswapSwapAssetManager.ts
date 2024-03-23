// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UniswapSwap extends ethereum.Event {
  get params(): UniswapSwap__Params {
    return new UniswapSwap__Params(this);
  }
}

export class UniswapSwap__Params {
  _event: UniswapSwap;

  constructor(event: UniswapSwap) {
    this._event = event;
  }

  get assetOut(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountOut(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get noteNullifierIn(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get noteFooter(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get noteCommitmentOut(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct extends ethereum.Tuple {
  get serviceFee(): BigInt {
    return this[0].toBigInt();
  }

  get relayerRefund(): BigInt {
    return this[1].toBigInt();
  }
}

export class UniswapSwapAssetManager__uniswapSimpleSwapResult {
  value0: BigInt;
  value1: UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct;

  constructor(
    value0: BigInt,
    value1: UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct,
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    return map;
  }

  getAmountOut(): BigInt {
    return this.value0;
  }

  getFeesDetails(): UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct {
    return this.value1;
  }
}

export class UniswapSwapAssetManager__uniswapSimpleSwapInputArgsStruct extends ethereum.Tuple {
  get inNoteData(): UniswapSwapAssetManager__uniswapSimpleSwapInputArgsInNoteDataStruct {
    return changetype<UniswapSwapAssetManager__uniswapSimpleSwapInputArgsInNoteDataStruct>(
      this[0].toTuple(),
    );
  }

  get merkleRoot(): Bytes {
    return this[1].toBytes();
  }

  get assetOut(): Address {
    return this[2].toAddress();
  }

  get relayer(): Address {
    return this[3].toAddress();
  }

  get amountOutMin(): BigInt {
    return this[4].toBigInt();
  }

  get noteFooter(): Bytes {
    return this[5].toBytes();
  }

  get relayerGasFee(): BigInt {
    return this[6].toBigInt();
  }

  get poolFee(): i32 {
    return this[7].toI32();
  }
}

export class UniswapSwapAssetManager__uniswapSimpleSwapInputArgsInNoteDataStruct extends ethereum.Tuple {
  get assetAddress(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get nullifier(): Bytes {
    return this[2].toBytes();
  }
}

export class UniswapSwapAssetManager extends ethereum.SmartContract {
  static bind(address: Address): UniswapSwapAssetManager {
    return new UniswapSwapAssetManager("UniswapSwapAssetManager", address);
  }

  ASSET_ETH(): Bytes {
    let result = super.call("ASSET_ETH", "ASSET_ETH():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ASSET_ETH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ASSET_ETH", "ASSET_ETH():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ETH_ADDRESS(): Address {
    let result = super.call("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);

    return result[0].toAddress();
  }

  try_ETH_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  P(): BigInt {
    let result = super.call("P", "P():(uint256)", []);

    return result[0].toBigInt();
  }

  try_P(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("P", "P():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  WETH_ADDRESS(): Address {
    let result = super.call("WETH_ADDRESS", "WETH_ADDRESS():(address)", []);

    return result[0].toAddress();
  }

  try_WETH_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH_ADDRESS", "WETH_ADDRESS():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _boolToBytes32(value: boolean): Bytes {
    let result = super.call(
      "_boolToBytes32",
      "_boolToBytes32(bool):(bytes32)",
      [ethereum.Value.fromBoolean(value)],
    );

    return result[0].toBytes();
  }

  try__boolToBytes32(value: boolean): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "_boolToBytes32",
      "_boolToBytes32(bool):(bytes32)",
      [ethereum.Value.fromBoolean(value)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAssetPoolERC20(): Address {
    let result = super.call(
      "getAssetPoolERC20",
      "getAssetPoolERC20():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getAssetPoolERC20(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetPoolERC20",
      "getAssetPoolERC20():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAssetPoolERC721(): Address {
    let result = super.call(
      "getAssetPoolERC721",
      "getAssetPoolERC721():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getAssetPoolERC721(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetPoolERC721",
      "getAssetPoolERC721():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAssetPoolETH(): Address {
    let result = super.call(
      "getAssetPoolETH",
      "getAssetPoolETH():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getAssetPoolETH(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetPoolETH",
      "getAssetPoolETH():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getComplianceManager(): Address {
    let result = super.call(
      "getComplianceManager",
      "getComplianceManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getComplianceManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getComplianceManager",
      "getComplianceManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFeeManager(): Address {
    let result = super.call("getFeeManager", "getFeeManager():(address)", []);

    return result[0].toAddress();
  }

  try_getFeeManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getFeeManager",
      "getFeeManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMerkleTreeOperator(): Address {
    let result = super.call(
      "getMerkleTreeOperator",
      "getMerkleTreeOperator():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getMerkleTreeOperator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getMerkleTreeOperator",
      "getMerkleTreeOperator():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMimc254(): Address {
    let result = super.call("getMimc254", "getMimc254():(address)", []);

    return result[0].toAddress();
  }

  try_getMimc254(): ethereum.CallResult<Address> {
    let result = super.tryCall("getMimc254", "getMimc254():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRelayerHub(): Address {
    let result = super.call("getRelayerHub", "getRelayerHub():(address)", []);

    return result[0].toAddress();
  }

  try_getRelayerHub(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRelayerHub",
      "getRelayerHub():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getVerifierHub(): Address {
    let result = super.call("getVerifierHub", "getVerifierHub():(address)", []);

    return result[0].toAddress();
  }

  try_getVerifierHub(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getVerifierHub",
      "getVerifierHub():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapRouter(): Address {
    let result = super.call("swapRouter", "swapRouter():(address)", []);

    return result[0].toAddress();
  }

  try_swapRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapRouter", "swapRouter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapSimpleSwap(
    args: UniswapSwapAssetManager__uniswapSimpleSwapInputArgsStruct,
    proof: Bytes,
  ): UniswapSwapAssetManager__uniswapSimpleSwapResult {
    let result = super.call(
      "uniswapSimpleSwap",
      "uniswapSimpleSwap(((address,uint256,bytes32),bytes32,address,address,uint256,bytes32,uint256,uint24),bytes):(uint256,(uint256,uint256))",
      [ethereum.Value.fromTuple(args), ethereum.Value.fromBytes(proof)],
    );

    return new UniswapSwapAssetManager__uniswapSimpleSwapResult(
      result[0].toBigInt(),
      changetype<UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct>(
        result[1].toTuple(),
      ),
    );
  }

  try_uniswapSimpleSwap(
    args: UniswapSwapAssetManager__uniswapSimpleSwapInputArgsStruct,
    proof: Bytes,
  ): ethereum.CallResult<UniswapSwapAssetManager__uniswapSimpleSwapResult> {
    let result = super.tryCall(
      "uniswapSimpleSwap",
      "uniswapSimpleSwap(((address,uint256,bytes32),bytes32,address,address,uint256,bytes32,uint256,uint24),bytes):(uint256,(uint256,uint256))",
      [ethereum.Value.fromTuple(args), ethereum.Value.fromBytes(proof)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapSwapAssetManager__uniswapSimpleSwapResult(
        value[0].toBigInt(),
        changetype<UniswapSwapAssetManager__uniswapSimpleSwapResultFeesDetailsStruct>(
          value[1].toTuple(),
        ),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get assetPoolERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetPoolERC721(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get assetPoolETH(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get verifierHub(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get relayerHub(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get feeManager(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get keyringManager(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get merkleTreeOperator(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get mimcBn254(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get initialOwner(): Address {
    return this._call.inputValues[9].value.toAddress();
  }

  get _swapRouter(): Address {
    return this._call.inputValues[10].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ReleaseToAsssetPoolCall extends ethereum.Call {
  get inputs(): ReleaseToAsssetPoolCall__Inputs {
    return new ReleaseToAsssetPoolCall__Inputs(this);
  }

  get outputs(): ReleaseToAsssetPoolCall__Outputs {
    return new ReleaseToAsssetPoolCall__Outputs(this);
  }
}

export class ReleaseToAsssetPoolCall__Inputs {
  _call: ReleaseToAsssetPoolCall;

  constructor(call: ReleaseToAsssetPoolCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReleaseToAsssetPoolCall__Outputs {
  _call: ReleaseToAsssetPoolCall;

  constructor(call: ReleaseToAsssetPoolCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAssetPoolERC20Call extends ethereum.Call {
  get inputs(): SetAssetPoolERC20Call__Inputs {
    return new SetAssetPoolERC20Call__Inputs(this);
  }

  get outputs(): SetAssetPoolERC20Call__Outputs {
    return new SetAssetPoolERC20Call__Outputs(this);
  }
}

export class SetAssetPoolERC20Call__Inputs {
  _call: SetAssetPoolERC20Call;

  constructor(call: SetAssetPoolERC20Call) {
    this._call = call;
  }

  get assetPoolERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAssetPoolERC20Call__Outputs {
  _call: SetAssetPoolERC20Call;

  constructor(call: SetAssetPoolERC20Call) {
    this._call = call;
  }
}

export class SetAssetPoolERC721Call extends ethereum.Call {
  get inputs(): SetAssetPoolERC721Call__Inputs {
    return new SetAssetPoolERC721Call__Inputs(this);
  }

  get outputs(): SetAssetPoolERC721Call__Outputs {
    return new SetAssetPoolERC721Call__Outputs(this);
  }
}

export class SetAssetPoolERC721Call__Inputs {
  _call: SetAssetPoolERC721Call;

  constructor(call: SetAssetPoolERC721Call) {
    this._call = call;
  }

  get assetPoolERC721(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAssetPoolERC721Call__Outputs {
  _call: SetAssetPoolERC721Call;

  constructor(call: SetAssetPoolERC721Call) {
    this._call = call;
  }
}

export class SetAssetPoolETHCall extends ethereum.Call {
  get inputs(): SetAssetPoolETHCall__Inputs {
    return new SetAssetPoolETHCall__Inputs(this);
  }

  get outputs(): SetAssetPoolETHCall__Outputs {
    return new SetAssetPoolETHCall__Outputs(this);
  }
}

export class SetAssetPoolETHCall__Inputs {
  _call: SetAssetPoolETHCall;

  constructor(call: SetAssetPoolETHCall) {
    this._call = call;
  }

  get assetPoolETH(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAssetPoolETHCall__Outputs {
  _call: SetAssetPoolETHCall;

  constructor(call: SetAssetPoolETHCall) {
    this._call = call;
  }
}

export class SetComplianceManagerCall extends ethereum.Call {
  get inputs(): SetComplianceManagerCall__Inputs {
    return new SetComplianceManagerCall__Inputs(this);
  }

  get outputs(): SetComplianceManagerCall__Outputs {
    return new SetComplianceManagerCall__Outputs(this);
  }
}

export class SetComplianceManagerCall__Inputs {
  _call: SetComplianceManagerCall;

  constructor(call: SetComplianceManagerCall) {
    this._call = call;
  }

  get complianceManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetComplianceManagerCall__Outputs {
  _call: SetComplianceManagerCall;

  constructor(call: SetComplianceManagerCall) {
    this._call = call;
  }
}

export class SetFeeManagerCall extends ethereum.Call {
  get inputs(): SetFeeManagerCall__Inputs {
    return new SetFeeManagerCall__Inputs(this);
  }

  get outputs(): SetFeeManagerCall__Outputs {
    return new SetFeeManagerCall__Outputs(this);
  }
}

export class SetFeeManagerCall__Inputs {
  _call: SetFeeManagerCall;

  constructor(call: SetFeeManagerCall) {
    this._call = call;
  }

  get feeManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeManagerCall__Outputs {
  _call: SetFeeManagerCall;

  constructor(call: SetFeeManagerCall) {
    this._call = call;
  }
}

export class SetRelayerHubCall extends ethereum.Call {
  get inputs(): SetRelayerHubCall__Inputs {
    return new SetRelayerHubCall__Inputs(this);
  }

  get outputs(): SetRelayerHubCall__Outputs {
    return new SetRelayerHubCall__Outputs(this);
  }
}

export class SetRelayerHubCall__Inputs {
  _call: SetRelayerHubCall;

  constructor(call: SetRelayerHubCall) {
    this._call = call;
  }

  get relayerHub(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRelayerHubCall__Outputs {
  _call: SetRelayerHubCall;

  constructor(call: SetRelayerHubCall) {
    this._call = call;
  }
}

export class SetVerifierHubCall extends ethereum.Call {
  get inputs(): SetVerifierHubCall__Inputs {
    return new SetVerifierHubCall__Inputs(this);
  }

  get outputs(): SetVerifierHubCall__Outputs {
    return new SetVerifierHubCall__Outputs(this);
  }
}

export class SetVerifierHubCall__Inputs {
  _call: SetVerifierHubCall;

  constructor(call: SetVerifierHubCall) {
    this._call = call;
  }

  get verifierHub(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVerifierHubCall__Outputs {
  _call: SetVerifierHubCall;

  constructor(call: SetVerifierHubCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UniswapSimpleSwapCall extends ethereum.Call {
  get inputs(): UniswapSimpleSwapCall__Inputs {
    return new UniswapSimpleSwapCall__Inputs(this);
  }

  get outputs(): UniswapSimpleSwapCall__Outputs {
    return new UniswapSimpleSwapCall__Outputs(this);
  }
}

export class UniswapSimpleSwapCall__Inputs {
  _call: UniswapSimpleSwapCall;

  constructor(call: UniswapSimpleSwapCall) {
    this._call = call;
  }

  get args(): UniswapSimpleSwapCallArgsStruct {
    return changetype<UniswapSimpleSwapCallArgsStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }

  get proof(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UniswapSimpleSwapCall__Outputs {
  _call: UniswapSimpleSwapCall;

  constructor(call: UniswapSimpleSwapCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get feesDetails(): UniswapSimpleSwapCallFeesDetailsStruct {
    return changetype<UniswapSimpleSwapCallFeesDetailsStruct>(
      this._call.outputValues[1].value.toTuple(),
    );
  }
}

export class UniswapSimpleSwapCallArgsStruct extends ethereum.Tuple {
  get inNoteData(): UniswapSimpleSwapCallArgsInNoteDataStruct {
    return changetype<UniswapSimpleSwapCallArgsInNoteDataStruct>(
      this[0].toTuple(),
    );
  }

  get merkleRoot(): Bytes {
    return this[1].toBytes();
  }

  get assetOut(): Address {
    return this[2].toAddress();
  }

  get relayer(): Address {
    return this[3].toAddress();
  }

  get amountOutMin(): BigInt {
    return this[4].toBigInt();
  }

  get noteFooter(): Bytes {
    return this[5].toBytes();
  }

  get relayerGasFee(): BigInt {
    return this[6].toBigInt();
  }

  get poolFee(): i32 {
    return this[7].toI32();
  }
}

export class UniswapSimpleSwapCallArgsInNoteDataStruct extends ethereum.Tuple {
  get assetAddress(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get nullifier(): Bytes {
    return this[2].toBytes();
  }
}

export class UniswapSimpleSwapCallFeesDetailsStruct extends ethereum.Tuple {
  get serviceFee(): BigInt {
    return this[0].toBigInt();
  }

  get relayerRefund(): BigInt {
    return this[1].toBigInt();
  }
}
