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

export class SablierClaimStream extends ethereum.Event {
  get params(): SablierClaimStream__Params {
    return new SablierClaimStream__Params(this);
  }
}

export class SablierClaimStream__Params {
  _event: SablierClaimStream;

  constructor(event: SablierClaimStream) {
    this._event = event;
  }

  get nullifier(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountOut(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noteOut(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get noteFooter(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class SablierCreateStream extends ethereum.Event {
  get params(): SablierCreateStream__Params {
    return new SablierCreateStream__Params(this);
  }
}

export class SablierCreateStream__Params {
  _event: SablierCreateStream;

  constructor(event: SablierCreateStream) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nft(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get streamIDs(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get notesOut(): Array<Bytes> {
    return this._event.parameters[3].value.toBytesArray();
  }

  get noteFooters(): Array<Bytes> {
    return this._event.parameters[4].value.toBytesArray();
  }
}

export class SablierLinearAssetManager extends ethereum.SmartContract {
  static bind(address: Address): SablierLinearAssetManager {
    return new SablierLinearAssetManager("SablierLinearAssetManager", address);
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

  get complianceManager(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get merkleTreeOperator(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get mimc254(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get initialOwner(): Address {
    return this._call.inputValues[9].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimStreamCall extends ethereum.Call {
  get inputs(): ClaimStreamCall__Inputs {
    return new ClaimStreamCall__Inputs(this);
  }

  get outputs(): ClaimStreamCall__Outputs {
    return new ClaimStreamCall__Outputs(this);
  }
}

export class ClaimStreamCall__Inputs {
  _call: ClaimStreamCall;

  constructor(call: ClaimStreamCall) {
    this._call = call;
  }

  get _proof(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _args(): ClaimStreamCall_argsStruct {
    return changetype<ClaimStreamCall_argsStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }
}

export class ClaimStreamCall__Outputs {
  _call: ClaimStreamCall;

  constructor(call: ClaimStreamCall) {
    this._call = call;
  }
}

export class ClaimStreamCall_argsStruct extends ethereum.Tuple {
  get merkleRoot(): Bytes {
    return this[0].toBytes();
  }

  get nullifierIn(): Bytes {
    return this[1].toBytes();
  }

  get stream(): Address {
    return this[2].toAddress();
  }

  get streamId(): BigInt {
    return this[3].toBigInt();
  }

  get assetOut(): Address {
    return this[4].toAddress();
  }

  get amountOut(): BigInt {
    return this[5].toBigInt();
  }

  get noteFooter(): Bytes {
    return this[6].toBytes();
  }

  get relayer(): Address {
    return this[7].toAddress();
  }

  get gasRefund(): BigInt {
    return this[8].toBigInt();
  }
}

export class CreateLinearStreamCall extends ethereum.Call {
  get inputs(): CreateLinearStreamCall__Inputs {
    return new CreateLinearStreamCall__Inputs(this);
  }

  get outputs(): CreateLinearStreamCall__Outputs {
    return new CreateLinearStreamCall__Outputs(this);
  }
}

export class CreateLinearStreamCall__Inputs {
  _call: CreateLinearStreamCall;

  constructor(call: CreateLinearStreamCall) {
    this._call = call;
  }

  get _proof(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _args(): CreateLinearStreamCall_argsStruct {
    return changetype<CreateLinearStreamCall_argsStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }
}

export class CreateLinearStreamCall__Outputs {
  _call: CreateLinearStreamCall;

  constructor(call: CreateLinearStreamCall) {
    this._call = call;
  }
}

export class CreateLinearStreamCall_argsStruct extends ethereum.Tuple {
  get assetIn(): Address {
    return this[0].toAddress();
  }

  get amountIn(): BigInt {
    return this[1].toBigInt();
  }

  get streamType(): BigInt {
    return this[2].toBigInt();
  }

  get streamSize(): BigInt {
    return this[3].toBigInt();
  }

  get streamParams(): Array<CreateLinearStreamCall_argsStreamParamsStruct> {
    return this[4].toTupleArray<CreateLinearStreamCall_argsStreamParamsStruct>();
  }

  get parametersHash(): Bytes {
    return this[5].toBytes();
  }

  get nftOut(): Address {
    return this[6].toAddress();
  }

  get noteFooters(): Array<Bytes> {
    return this[7].toBytesArray();
  }
}

export class CreateLinearStreamCall_argsStreamParamsStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get cancelable(): boolean {
    return this[1].toBoolean();
  }

  get transferable(): boolean {
    return this[2].toBoolean();
  }

  get cliff(): BigInt {
    return this[3].toBigInt();
  }

  get total(): BigInt {
    return this[4].toBigInt();
  }

  get start(): BigInt {
    return this[5].toBigInt();
  }

  get end(): BigInt {
    return this[6].toBigInt();
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

export class SetBatchCall extends ethereum.Call {
  get inputs(): SetBatchCall__Inputs {
    return new SetBatchCall__Inputs(this);
  }

  get outputs(): SetBatchCall__Outputs {
    return new SetBatchCall__Outputs(this);
  }
}

export class SetBatchCall__Inputs {
  _call: SetBatchCall;

  constructor(call: SetBatchCall) {
    this._call = call;
  }

  get batch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBatchCall__Outputs {
  _call: SetBatchCall;

  constructor(call: SetBatchCall) {
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

export class SetLockupDynamicCall extends ethereum.Call {
  get inputs(): SetLockupDynamicCall__Inputs {
    return new SetLockupDynamicCall__Inputs(this);
  }

  get outputs(): SetLockupDynamicCall__Outputs {
    return new SetLockupDynamicCall__Outputs(this);
  }
}

export class SetLockupDynamicCall__Inputs {
  _call: SetLockupDynamicCall;

  constructor(call: SetLockupDynamicCall) {
    this._call = call;
  }

  get ldynamic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLockupDynamicCall__Outputs {
  _call: SetLockupDynamicCall;

  constructor(call: SetLockupDynamicCall) {
    this._call = call;
  }
}

export class SetLockupLinearCall extends ethereum.Call {
  get inputs(): SetLockupLinearCall__Inputs {
    return new SetLockupLinearCall__Inputs(this);
  }

  get outputs(): SetLockupLinearCall__Outputs {
    return new SetLockupLinearCall__Outputs(this);
  }
}

export class SetLockupLinearCall__Inputs {
  _call: SetLockupLinearCall;

  constructor(call: SetLockupLinearCall) {
    this._call = call;
  }

  get llinear(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLockupLinearCall__Outputs {
  _call: SetLockupLinearCall;

  constructor(call: SetLockupLinearCall) {
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