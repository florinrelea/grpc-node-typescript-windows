import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { Users } from '../../../../protos/ts/users'

export class UsersServer extends Users.UnimplementedUsersServiceService {
  GetUser(
    call: ServerUnaryCall<Users.GetUserRequest, Users.GetUserResponse>,
    callback: sendUnaryData<Users.GetUserResponse>
  ): void {
    const userId = call.request.id

    console.log('Requested user id:', userId)

    callback(null, new Users.GetUserResponse({
      firstName: 'Florin',
      lastName: 'Relea',
      location: 'Romania'
    }))
  }
}
