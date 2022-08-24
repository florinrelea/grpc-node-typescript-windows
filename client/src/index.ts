import { Users } from '../../protos/ts/users'
import { usersServiceClient } from './rpc-connection'

async function main() {
  usersServiceClient.GetUser(new Users.GetUserRequest({
    id: 'the-computer-exert'
  }), {
    deadline: new Date(Date.now() + (30 * 1000)) // Deadline in 30 seconds
  }, (error, response) => {
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
