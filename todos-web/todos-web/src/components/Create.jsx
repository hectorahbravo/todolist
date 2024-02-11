import Form from "./Form";
import { createToDos } from "../services/toDosService";
import { useNavigate } from "react-router-dom"; // Importa useNavigate desde react-router-dom

const Create = () => {
  const navigate = useNavigate(); // Obtén la función navigate de useNavigate

  const createToDo = (values) => {
    createToDos(values)
      .then(() => {
        console.log("Todo created successfully");
        navigate("/todos"); // Navega a la ruta /todos
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
      });
  };

  return (
    <div>
      <h1>Create todo</h1>
      <Form onSubmit={createToDo} />
    </div>
  );
};

export default Create;
