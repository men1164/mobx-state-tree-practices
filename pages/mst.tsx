import { observer } from 'mobx-react-lite'

import Todo from '../src/components/Todo'

const Mst = observer(() => {
  // const { userLists, todoLists } = useStore()
  // console.log(userLists, todoLists)
  return (
    <div>
      <Todo />
    </div>
  )
})

export default Mst
