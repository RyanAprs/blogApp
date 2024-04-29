import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";
import Header from "../../components/molecules/Header/header";
import Home from "../../pages/Home/home";
import Blogs from "../../pages/Blogs/blogs";
import Contact from "../../pages/Contact/contact";
import DetailBlog from "../../pages/Blogs/detailBlog";
import Profile from "../../pages/Profile/profile";
import UpdateProfile from "../../pages/Profile/updateProfile";

const RouteData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blog/:id",
    element: <DetailBlog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/update/:id",
    element: <UpdateProfile />,
  },
];

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {RouteData.map((route) => {
          return (
            <Route
              path={route.path}
              element={
                <>
                  <Header />
                  {route.element}
                </>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default Routing;
