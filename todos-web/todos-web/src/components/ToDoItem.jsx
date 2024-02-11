import { Link } from "react-router-dom";

const ToDoItem = ({ todo, handleOnDelete }) => {
  const formattedStatus =
    todo.status.charAt(0).toUpperCase() + todo.status.slice(1);

  return (
    <tr>
      <th scope="row">*</th>
      <td>{todo.task}</td>
      <td>
        <input
          type="checkbox"
          id={`checkbox-${todo.id}`}
          value="checkbox"
          checked={todo.status === "done"}
        />
      </td>
      <td>{formattedStatus}</td>
      <td className="d-flex">
        <Link to={`/todos/${todo.id}`}>
          <button className="btn btn-primary me-2">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={() => handleOnDelete(todo)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToDoItem;
