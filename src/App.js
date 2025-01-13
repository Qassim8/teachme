import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseContent from "./pages/CourseContent";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/corses/:id" element={<CourseContent/>} />
      </Route>
    </Routes>
  );
}

export default App;
