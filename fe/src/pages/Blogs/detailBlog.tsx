import axios from "axios";
import { useEffect, useState } from "react";
import { FaPen, FaTrash, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const DetailBlog = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [userBlogId, setUserBlogId] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    getBlogById();
  });

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

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/${id}`
      );
      setTitle(response.data.data.title);
      setUserBlogId(response.data.data.user_blog_id);
      setAuthor(response.data.data.author);
      setImage(response.data.data.image);
      setDescription(response.data.data.description);

      const dateCreatedBlog = response.data.data.createdAt;
      const dateSlice = dateCreatedBlog.slice(0, 10);
      setDate(dateSlice);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    console.log(`update ${id}, ${title}`);
  };

  const handleDelete = () => {
    console.log(`delete ${id}, ${title}`);
  };

  return (
    <>
      <div>
        <div className="p-8">
          <img
            className="h-[420px] w-full object-cover border-[1px] border-black rounded"
            src={`http://localhost:3000/${image}`}
            alt="blog image"
          />
          <div className="flex gap-4  w-max rounded-full py-2 justify-center items-center">
            <h1 className="sm:text-4xl md:text-7xl text-2xl font-bold">
              {title}
            </h1>
          </div>
          <Link
            to={`/profile/${userBlogId}`}
            className="flex gap-3 mb-3 items-center py-2 w-max"
          >
            <div className="flex gap-1 mb-3 items-center">
              <p className="rounded-full bg-slate-300 p-3">
                <FaUser className=" " />
              </p>
              <p className="text-xl font-bold uppercase">{author} </p>
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <p>-</p>
              <p>{date}</p>
            </div>
          </Link>{" "}
          <p className="text-lg">{description}</p>
        </div>
        {(user && user.user_id !== userBlogId) || userBlogId === null ? null : (
          <div className="flex justify-center items-center gap-4 p-4">
            <Link
              to=""
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 flex gap-2 items-center"
            >
              <FaTrash />
              Delete
            </Link>
            <Link
              to=""
              onClick={handleUpdate}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 flex gap-2 items-center"
            >
              <FaPen />
              Update
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
