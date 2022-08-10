import { values } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import { useStore } from '../store/TestStore'
import { TodoInstance } from '../store/TodoStore'

const Todo = observer(() => {
  const { todos } = useStore()
  const [newTodo, setNewTodo] = useState<string>('')
  const [id, setId] = useState<string>('')

  const handleRename = (todo: TodoInstance) => {
    todo.setName(prompt('Edit Todo', todo.name) || todo.name)
  }

  return (
    <div>
      {values(todos.todoList).map((todo: TodoInstance, idx: number) => (
        <div onDoubleClick={() => handleRename(todo)} key={idx}>
          <input type="checkbox" onChange={todo.toggle} checked={todo.done} />
          {todo.name}
        </div>
      ))}
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => todos.addTodo(id, newTodo)}>Add</button>
    </div>
  )
})

export default Todo
