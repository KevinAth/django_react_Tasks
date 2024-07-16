import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-slate-600  p-4 rounded-md shadow-lg m-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        Administrador de tareas
      </h1>
      <nav className="space-y-2">
        <Link
          to="/Tasks"
          className="block text-lg font-semibold text-white hover:text-gray-200 transition duration-200"
        >
          Tareas
        </Link>
        <Link
          to="/Tasks-create"
          className="block text-lg font-semibold text-white hover:text-gray-200 transition duration-200"
        >
          Crear tarea
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
