import http from "./BaseService";

export const getToDos = () => http.get("/todos");

export const getToDoDetails = (id) => http.get(`/todos/${id}`);

export const createToDos = (data) => http.post("/todos/new", data);

export const editToDos = (id, data) => http.put(`/todos/${id}`, data);

export const deleteToDo = (id) => http.delete(`/todos/${id}`);
