import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDeleteTodo} = props
  const {title, id} = eachTodoItem
  const deleteTodo = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="each-todo">
      <p className="todo-info">{title}</p>
      <button type="button" className="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
