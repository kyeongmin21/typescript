import { Todo } from 'types'

interface Props extends Todo {
  onDelete: (id: number) => void
}

const TodoItem = (props: Props) => {
  const onClickButton = () => {
    props.onDelete(props.id)
  }

  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  )
}

export default TodoItem
