import { useForm } from "react-hook-form";
import { PostTask, DeleteTasks, UpdateTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskPageForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await UpdateTask(id, data);
      navigate("/tasks");
    } else {
      await PostTask(data);
      navigate("/tasks");
    }
  });

  async function delTask(id) {
    await DeleteTasks(id);
    navigate("/tasks");
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-slate-500 p-10 rounded-md shadow-lg text-white w-full max-w-md">
        <form onSubmit={onSubmit} className="space-y-4">
          <h3 className="text-2xl font-bold">Title</h3>
          <input
            textarea='hola'
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="w-full p-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500"
          />
          <h3 className="text-2xl font-bold">Description</h3>
          <textarea
            rows={5}
            placeholder="Description"
            {...register("description", { required: true })}
            className="w-full p-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500"
          ></textarea>
          <input
            type="checkbox"
            {...register("done")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label className="text-lg m-3">Completed</label>
          <div className="flex space-x-4">
            {id ? (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            )}
          </div>
        </form>
        {id && (
          <button
            onClick={() => delTask(id)}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
