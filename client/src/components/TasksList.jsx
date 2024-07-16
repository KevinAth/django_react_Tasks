import { useEffect, useState } from "react";
import { GetAllTasks, DeleteTasks } from "../api/tasks.api";

import { TaskCard } from "./TaskCard";
export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await GetAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  console.log(tasks);
  return (
    <div className="grid grid-cols-4 justify-center align-middle">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
