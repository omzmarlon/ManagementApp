// package: com.managementapp.transfers
// file: Users.proto

import * as jspb from "google-protobuf";

export class AccountDTO extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPhone(): number;
  setPhone(value: number): void;

  getGender(): AccountDTO.Gender;
  setGender(value: AccountDTO.Gender): void;

  getRegisterAt(): number;
  setRegisterAt(value: number): void;

  getLastUpdateAt(): number;
  setLastUpdateAt(value: number): void;

  getIsTutor(): boolean;
  setIsTutor(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDTO.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDTO): AccountDTO.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDTO;
  static deserializeBinaryFromReader(message: AccountDTO, reader: jspb.BinaryReader): AccountDTO;
}

export namespace AccountDTO {
  export type AsObject = {
    id: number,
    username: string,
    email: string,
    password: string,
    phone: number,
    gender: AccountDTO.Gender,
    registerAt: number,
    lastUpdateAt: number,
    isTutor: boolean,
  }

  export enum Gender {
    Male = 0,
    Female = 1,
  }
}

