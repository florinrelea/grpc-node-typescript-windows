import { grpcConfig } from './../../libs/config/grpc-config'
import { credentials } from '@grpc/grpc-js'
import { Users } from '../../protos/ts/users'

// Have to change this
const connectionUri = `localhost:${grpcConfig.serverPort}`

export const usersServiceClient = new Users.UsersServiceClient(
  connectionUri,
  credentials.createInsecure()
)
