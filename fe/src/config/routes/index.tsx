import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";
import Header from "../../components/molecules/Header/header";
import Home from "../../pages/Home/home";
import Blogs from "../../pages/Blogs/blogs";
import Contact from "../../pages/Contact/contact";
import DetailBlog from "../../pages/Blogs/detailBlog";
import Profile from "../../pages/Profile/profile";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Blogs />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Header />
              <DetailBlog />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
