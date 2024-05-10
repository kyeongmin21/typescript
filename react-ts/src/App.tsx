import './App.css'
import React, {useEffect, useRef, useReducer, useContext} from 'react'
import Editor from 'components/Editor'
import TodoItem from 'components/TodoItem'
import { Todo } from 'types'

type Action =
  | { type: 'CREATE'; data: { id: number, content: string }}
  | { type: 'DELETE'; id: number }


function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data]
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.id)
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null)
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onDelete: (id: number) => void;
} | null>(null)

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext)
  if (!dispatch) throw new Error('TodoDispatchContext에 문제가 있다')
  return dispatch
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)
  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text
      }
    })
  }

  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    })
  }

  useEffect(() => {
    console.log('todos', todos)
  }, [todos])

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onDelete,
        }}>
          <Editor onClickAdd={onClickAdd}/>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} onDelete={onDelete}/>
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
