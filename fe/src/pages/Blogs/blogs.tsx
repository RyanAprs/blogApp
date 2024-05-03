import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get("http://localhost:3000/api/v1/blog")
        .then((result) => {
          setBlogs(result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 text-black items-center justify-center">
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
              to={`detail/${blog.blog_id}`}
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
                <h1 className="text-2xl uppercase mb-2">{blog.title}</h1>
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
    </>
  );
};

export default Blogs;
