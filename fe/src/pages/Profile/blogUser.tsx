import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
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
    <div className="p-4 flex justify-end flex-col items-end">
      {user && user.user_id !== id ? null : (
        <Link to="/blog/create" className="bg-gray-500 p-2 rounded mb-4">
          Crate Blog
        </Link>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  text-black items-center justify-center">
        {blogs?.map((blog, index) => {
          const dateSlice = blog.createdAt.slice(0, 10);
          const descLength = blog.description.length;
          console.log(descLength);
          const truncatedDesc =
            descLength > 100
              ? `${blog.description.slice(0, 100)}...`
              : blog.description;
          const showReadMore = descLength > 100;

          return (
            <Link
              to={`/blog/detail/${blog.blog_id}`}
              key={index}
              className="shadow-lg cursor-pointer bg-gray-400 p-4 flex flex-col items-start rounded"
            >
              <img
                className="h-[350px] w-full object-cover rounded"
                src={`http://localhost:3000/${blog.image}`}
                alt="blog image"
              />
              <hr className="mt-3" />
              <div className="">
                <h1 className="text-2xl uppercase mb-2 max-w-[90%]">
                  {blog.title}
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                <p className="rounded-full bg-slate-300 p-2">
                  <FaUser className="text-black" />
                </p>
                <p>{blog.author}</p>-<p>{dateSlice}</p>
              </div>
              <div>
                <p>{truncatedDesc}</p>
                {showReadMore && (
                  <span className="text-slate-100 cursor-pointer text-sm underline">
                    ...read more
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogUser;
