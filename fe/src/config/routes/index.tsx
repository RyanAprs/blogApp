import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/home";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
