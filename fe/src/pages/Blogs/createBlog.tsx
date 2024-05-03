import axios from "axios";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Change to null instead of undefined
  const [author, setAuthor] = useState("");
  const [user_blog_id, setUser_blog_id] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    if (userData) {
      setAuthor(userData.name);
      setUser_blog_id(userData.user_id);
    }
  }, []);

  const handleCreate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("user_blog_id", user_blog_id);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:3000/api/v1/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status_code === 200) {
        // Corrected the status check
        navigate("/blog");
        console.log(response.data.data);
        console.log("create blog berhasil");
      } else {
        console.log("create blog gagal");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        console.log("No response received from server:", error.request);
      } else {
        console.log("Request error:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="min-h-screen w-full flex flex-col justify-center p-8 rounded shadow-lg gap-10">
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center justify-center flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            placeholder="Image"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            onChange={(e) => setImage(e.target.files[0])} // Changed to set the file object
          />
          <button
            onClick={handleCreate}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 flex gap-2 justify-center items-center"
          >
            <FaSave />
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
