/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.6
 * source: users.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace Users {
    export class GetUserRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: string;
        }): GetUserRequest {
            const message = new GetUserRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetUserRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetUserRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetUserRequest {
            return GetUserRequest.deserialize(bytes);
        }
    }
    export class GetUserResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            firstName?: string;
            lastName?: string;
            location?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("firstName" in data && data.firstName != undefined) {
                    this.firstName = data.firstName;
                }
                if ("lastName" in data && data.lastName != undefined) {
                    this.lastName = data.lastName;
                }
                if ("location" in data && data.location != undefined) {
                    this.location = data.location;
                }
            }
        }
        get firstName() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set firstName(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get lastName() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set lastName(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get location() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set location(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            firstName?: string;
            lastName?: string;
            location?: string;
        }): GetUserResponse {
            const message = new GetUserResponse({});
            if (data.firstName != null) {
                message.firstName = data.firstName;
            }
            if (data.lastName != null) {
                message.lastName = data.lastName;
            }
            if (data.location != null) {
                message.location = data.location;
            }
            return message;
        }
        toObject() {
            const data: {
                firstName?: string;
                lastName?: string;
                location?: string;
            } = {};
            if (this.firstName != null) {
                data.firstName = this.firstName;
            }
            if (this.lastName != null) {
                data.lastName = this.lastName;
            }
            if (this.location != null) {
                data.location = this.location;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.firstName.length)
                writer.writeString(1, this.firstName);
            if (this.lastName.length)
                writer.writeString(2, this.lastName);
            if (this.location.length)
                writer.writeString(3, this.location);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetUserResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetUserResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.firstName = reader.readString();
                        break;
                    case 2:
                        message.lastName = reader.readString();
                        break;
                    case 3:
                        message.location = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetUserResponse {
            return GetUserResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedUsersServiceService {
        static definition = {
            GetUser: {
                path: "/Users.UsersService/GetUser",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetUserRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetUserRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetUserResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetUserResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetUser(call: grpc_1.ServerUnaryCall<GetUserRequest, GetUserResponse>, callback: grpc_1.sendUnaryData<GetUserResponse>): void;
    }
    export class UsersServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedUsersServiceService.definition, "UsersService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetUser: GrpcUnaryServiceInterface<GetUserRequest, GetUserResponse> = (message: GetUserRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<GetUserResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<GetUserResponse>, callback?: grpc_1.requestCallback<GetUserResponse>): grpc_1.ClientUnaryCall => {
            return super.GetUser(message, metadata, options, callback);
        };
    }
}
