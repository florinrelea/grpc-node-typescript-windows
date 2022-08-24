import { grpcConfig } from '../../../libs/config/grpc-config'
import { Users } from '../../../protos/ts/users'
import { Server, ServerCredentials } from '@grpc/grpc-js'
import { UsersServer } from '../services/users'

export async function initServer() {
  const server = new Server()

  server.addService(Users.UnimplementedUsersServiceService.definition, new UsersServer())

  const serverUri = `localhost:${grpcConfig.serverPort}`

  await new Promise<void>((resolve, reject) => {
    server
      .bindAsync(serverUri, ServerCredentials.createInsecure(), error => {
        if (error) {
          reject(error)
          return
        }

        resolve()
      })
  })

  console.log(`Server running on ${serverUri}`)

  server.start()
}
