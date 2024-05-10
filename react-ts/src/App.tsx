import './App.css'
import React, {useEffect, useRef, useReducer} from 'react'
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
      <Editor onClickAdd={onClickAdd}/>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

export default App
