import { Instance, types } from 'mobx-state-tree'

const Todo = types
  .model({
    name: types.optional(types.string, 'Yo'),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setName(newName: string) {
      self.name = newName
    },
    toggle() {
      self.done = !self.done
    },
  }))

export const TodoList = types.model({ todoList: types.map(Todo) }).actions((self) => ({
  addTodo(id: string, name: string) {
    self.todoList.set(id, { name })
  },
}))

export type TodoInstance = Instance<typeof Todo>
