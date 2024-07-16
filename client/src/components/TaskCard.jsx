import { Link } from "react-router-dom";

export function TaskCard({ task }) {
  return (
    <div className="bg-slate-200 m-3 p-4 rounded-md shadow-md h-max">
      <Link to={`/tasks/${task.id}`}>
        <h1 className="text-2xl font-semibold text-black hover:text-gray-700 transition duration-200">
          {task.title}
        </h1>
      </Link>
      <p className="text-gray-800 mt-2">{task.description}</p>
      <hr className="mt-4 border-t-2 border-slate-300" />
      {task.done ? <h3>complete</h3> : <h3>pending</h3>}
    </div>
  );
}
