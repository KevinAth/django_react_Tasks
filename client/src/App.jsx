import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskPage } from "./pages/TasksPage";
import { TaskPageForm } from "./pages/TaskForm";
import Navigation from "./components/Navigation";
export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks-create" element={<TaskPageForm />} />
        <Route path="/tasks/:id" element={<TaskPageForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
