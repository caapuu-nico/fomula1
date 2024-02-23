import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
<AuthProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<h1>Home page</h1>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/tasks" element={<h1>Tasks</h1>}/>
    <Route path="/add-task" element={<h1>Add Task</h1>}/>
    <Route path="/tasks/:id" element={<h1>Update Tasks</h1>}/>
    <Route path="/profile" element={<h1>Profile</h1>}/>
    </Routes>
  </BrowserRouter>
</AuthProvider>
  )
}

export default App
