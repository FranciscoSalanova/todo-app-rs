const TodoItem = ({ title, completed }) => {
  return <li className={completed ? 'strike-through' : null}>{title}</li>
}

export default TodoItem
