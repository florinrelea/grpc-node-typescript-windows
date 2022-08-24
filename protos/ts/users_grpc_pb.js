// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_Users_GetUserRequest(arg) {
  if (!(arg instanceof users_pb.GetUserRequest)) {
    throw new Error('Expected argument of type Users.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Users_GetUserRequest(buffer_arg) {
  return users_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Users_GetUserResponse(arg) {
  if (!(arg instanceof users_pb.GetUserResponse)) {
    throw new Error('Expected argument of type Users.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Users_GetUserResponse(buffer_arg) {
  return users_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  getUser: {
    path: '/Users.UsersService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserRequest,
    responseType: users_pb.GetUserResponse,
    requestSerialize: serialize_Users_GetUserRequest,
    requestDeserialize: deserialize_Users_GetUserRequest,
    responseSerialize: serialize_Users_GetUserResponse,
    responseDeserialize: deserialize_Users_GetUserResponse,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
