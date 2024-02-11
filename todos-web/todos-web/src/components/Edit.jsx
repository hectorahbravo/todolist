import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToDoDetails, editToDos } from "../services/toDosService";
import Form from "./Form";

const Edit = () => {
  const { id } = useParams();

  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getToDoDetails(id)
      .then((todo) => {
        setToDo(todo);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (values) => {
    return editToDos(id, values);
  };

  return (
    <div>
      <h1>Edit todo</h1>
      {!loading && <Form initialValues={toDo} onSubmit={handleSubmit} />}
    </div>
  );
};

export default Edit;
