import { MobXProviderContext } from 'mobx-react'
import { types, Instance, onSnapshot } from 'mobx-state-tree'
import { useContext } from 'react'

import { TodoList } from './TodoStore'
import { UserList } from './UserStore'

const RootStore = types.model({
  todos: TodoList,
  users: UserList,
})

export type StoreInstance = Instance<typeof RootStore>

export const store = RootStore.create({
  users: { userList: [{ name: 'men' }, { name: 'yoyoyo' }] },
  todos: { todoList: [{ name: 'buy coffee' }, { name: 'buy food' }] },
})

onSnapshot(store, (snapshot) => {
  console.log('Snapshot: ', snapshot)
})

export function useStore() {
  return useContext(MobXProviderContext).store
}
