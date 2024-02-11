import { useFormik } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";

const toDoSchema = object({
  task: string().required("Campo Requerido"),
  status: string().required("Campo Requerido"),
});

const Form = ({ initialValues = { task: "", status: "" }, onSubmit }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: toDoSchema,
    onSubmit: (values) => {
      onSubmit(values)
        .then(() => {
          navigate("/todos");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task:
        </label>
        <input
          id="task"
          name="task"
          type="text"
          className={`form-control ${
            formik.touched.task && formik.errors.task ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        {formik.touched.task && formik.errors.task ? (
          <div className="invalid-feedback">{formik.errors.task}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          Status:
        </label>
        <select
          id="status"
          name="status"
          className={`form-control ${
            formik.touched.status && formik.errors.status ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          <option value="">Seleccionar Estado</option>
          <option value="not done">Not Done</option>
          <option value="in progress">In Progress</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
        {formik.touched.status && formik.errors.status ? (
          <div className="invalid-feedback">{formik.errors.status}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-light">
          Submit
        </button>
        <Link to={"/todos"}>
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
