import { useEffect, useState } from "react";
import { deleteToDo, getToDos } from "../services/toDosService";
import ToDoItem from "./ToDoItem";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);

  const onDelete = (todo) => {
    if (confirm(`¿Borrar la tarea: ${todo.task}?`)) {
      deleteToDo(todo.id)
        .then(() => {
          setToDos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    getToDos()
      .then((todos) => {
        setToDos(todos);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Link to={"/todos/new"}>
            <button className="btn btn-primary">+</button>
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Task</th>
                <th scope="col">Done</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody>
              {toDos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} handleOnDelete={onDelete} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ToDoList;
