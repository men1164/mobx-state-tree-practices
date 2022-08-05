import { Instance, types } from 'mobx-state-tree'

const User = types.model({
  name: types.optional(types.string, 'YoName'),
})

export const UserList = types.model({
  userList: types.array(User),
})

export type UserInstance = Instance<typeof User>
