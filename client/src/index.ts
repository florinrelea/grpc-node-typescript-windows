import { Users } from '../../protos/ts/users'
import { usersServiceClient } from './rpc-connection'

async function main() {
  usersServiceClient.GetUser(new Users.GetUserRequest({
   id: 'the-computer-exert'
  }), (error, response) => {
    if (error) {
      console.error(error)
      return
    }

    if (!response) {
      console.error('User not found.')
      return
    }

    const user = response.toObject()

    console.log('Received user:', user)
  })
}

main()
