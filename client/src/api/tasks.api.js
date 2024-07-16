import axios from "axios";

const TasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks",
});

export const GetAllTasks = () => TasksApi.get("/");

export const PostTask = (task) => TasksApi.post("/", task);

export const DeleteTasks = (id) => TasksApi.delete(`/${id}/`);

export const UpdateTask = (id, task) => TasksApi.put(`/${id}/`, task);
