import React, { useState } from 'react'
import { useTodoDispatch } from 'App'

interface Props {
  onClickAdd: (text: string) => void
}

const Editor = (props: Props) => {
  // const dispatch = useContext(TodoDispatchContext)
  const dispatch = useTodoDispatch()
  const [text, setText] = useState('')
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  const onClickButton = () => {
    dispatch.onClickAdd(text)
    setText('')
  }

  return (
    <>
      <input type="text"
             value={text}
             onChange={onChangeInput}/>
      <button onClick={onClickButton}>추가</button>
    </>
  )
}

export default Editor
