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

  const BlogList = () =>
    blogs.map((blog, index) => (
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
          <h1 className="text-2xl uppercase mb-2 max-w-[90%]">{blog.title}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <p className="rounded-full bg-slate-300 p-2">
            <FaUser className="text-black" />
          </p>
          <p>{blog.author}</p>-<p>{blog.createdAt.slice(0, 10)}</p>
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
    ));

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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  text-black items-center justify-center">
        {blogs.length > 0 ? <BlogList /> : <p>No blogs found.</p>}
      </div>
    </div>
  );
};

export default Blogs;
