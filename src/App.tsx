import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
const App = () => {
  const isHomePage = useMatch("/");

  return (
    <div className="">
      {isHomePage && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
