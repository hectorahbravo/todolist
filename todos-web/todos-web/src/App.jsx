import { Routes, Route } from "react-router-dom";

import Edit from "./components/Edit";
import ToDoList from "./components/ToDoList";

import "./App.css";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/todos/new" element={<Create />} />
        <Route path="/todos/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
