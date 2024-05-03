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
import BlogUser from "../../pages/Profile/blogUser";
import CreateBlog from "../../pages/Blogs/createBlog";
import UpdateBlog from "../../pages/Blogs/updateBlog";

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
    path: "/blog/create",
    element: <CreateBlog />,
  },
  {
    path: "/blog/detail/:id",
    element: <DetailBlog />,
  },
  {
    path: "/blog/update/:id",
    element: <UpdateBlog />,
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
  {
    path: "/profile/:id/blog/:id",
    element: <BlogUser />,
  },
];

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {RouteData.map((route, index) => {
          return (
            <Route
              key={index}
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
