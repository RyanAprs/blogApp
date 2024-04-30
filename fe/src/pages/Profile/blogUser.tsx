import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogUser = () => {
  const [user, setUser] = useState();
  const [blogs, setBlogs] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getUserDataFromCookie = () => {
      const cookieData = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userData="));

      if (cookieData) {
        const userDataString = cookieData.split("=")[1];
        try {
          const userData = JSON.parse(decodeURIComponent(userDataString));
          return userData;
        } catch (error) {
          console.error("Error parsing JSON from cookie:", error);
          return null;
        }
      } else {
        return null;
      }
    };

    const userData = getUserDataFromCookie();
    setUser(userData);
  }, []);

  useEffect(() => {
    if (user && user.user_id) {
      getBlogByUserId();
    }
  }, [user, id]);

  const getBlogByUserId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/${user.user_id}/${id}`
      );

      const blogs = response.data.data;
      setBlogs(blogs);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 text-white items-center justify-center">
        {blogs?.map((blog, index) => {
          const dateSlice = blog.createdAt.slice(0, 10);
          return (
            <Link
              to={`/blog/detail/${blog.blog_id}`}
              key={index}
              className="shadow-lg cursor-pointer bg-slate-500 p-4  rounded "
            >
              <img
                className="h-[350px] w-[550px] object-cover  rounded"
                src={`http://localhost:3000/${blog.image}`}
                alt="blog image"
              />
              <hr className="mt-3" />
              <h1 className="text-2xl">{blog.title}</h1>
              <div className="flex gap-3">
                <p>{blog.author} </p>-<p>{dateSlice}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogUser;
