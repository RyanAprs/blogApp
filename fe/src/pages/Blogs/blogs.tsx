import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get("http://localhost:3000/api/v1/blog")
        .then((result) => {
          setBlogs(result.data.data);
          console.log(result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 text-white items-center justify-center">
        {blogs?.map((blog, index) => {
          const dateSlice = blog.createdAt.slice(0, 10);
          return (
            <Link
              to={`detail/${blog.blog_id}`}
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

export default Blogs;
