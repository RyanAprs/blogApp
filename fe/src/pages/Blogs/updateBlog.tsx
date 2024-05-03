import axios from "axios";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/${id}`
      );
      console.log(response.data.data);
      setTitle(response.data.data.title);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogById();
  });

  const handleUpdate = () => {};
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
          <textarea
            placeholder="Description"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full h-[150px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            placeholder="Image"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            onChange={(e) => setImage(e.target.files[0])} 
          />
          <button
            onClick={handleUpdate}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 flex gap-2 justify-center items-center"
          >
            <FaSave />
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
