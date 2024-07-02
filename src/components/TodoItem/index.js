// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deletetodo} = props
  const {title, id} = todoList
  const deleteItem = () => {
    deletetodo(id)
  }
  return (
    <li className="list_container">
      <p className="text">{title}</p>
      <button className="btn_1" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
