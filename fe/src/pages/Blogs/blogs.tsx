import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/blog");
      setBlogs(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (q) => {
    try {
      if (q.length > 1) {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/search/${q}`
        );
        setBlogs(response.data.data);
      } else if (q.length === 0) {
        fetchBlogs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const BlogList = () => (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4  text-black items-center justify-center">
      {blogs.map((blog, index) => (
        <Link
          to={`detail/${blog.blog_id}`}
          key={index}
          className="shadow-lg cursor-pointer bg-gray-400 p-4 flex flex-col items-start rounded h-[530px]"
        >
          <img
            className="h-[300px] w-full object-cover rounded"
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
            <p className="rounded-full bg-slate-300 border-black border-[1px]">
              {blog.user_image && blog.user_image !== null ? (
                <img
                  src={`http://localhost:3000/${blog.user_image}`}
                  alt="user image"
                  className="rounded-full w-[50px] h-[50px] object-cover "
                />
              ) : (
                <FaUser className="text-black rounded-full w-[50px] h-[50px] object-cover" />
              )}
            </p>
            <p>
              {blog.author} - {blog.createdAt.slice(0, 10)}
            </p>
          </div>
          <div>
            <p>
              {blog.description.length > 100
                ? `${blog.description.slice(0, 100)}...`
                : blog.description}
            </p>
            {blog.description.length > 100 && (
              <span className="text-slate-100 cursor-pointer text-sm underline">
                ...read more
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="p-4 flex flex-col gap-6">
      <div>
        <input
          type="text"
          placeholder="Search blog..."
          className="border-none p-2 w-full focus:outline-none text-black rounded-full"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="">
        {/* {blogs.length > 0 ? <BlogList /> : <p>No blogs found.</p>} */}
        {Array.isArray(blogs) && blogs.length > 0 ? (
          <BlogList />
        ) : (
          <div className="flex justify-center">
            <h1>No Blog Posted</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
