import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <div>
        {blogs?.map((blog, index) => {
          return (
            <div key={index}>
              <img
                src={`http://localhost:3000/${blog.image}`}
                alt="blog image"
              />
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
              <p>{blog.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
