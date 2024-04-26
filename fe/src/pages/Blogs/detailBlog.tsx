import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailBlog = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();

  useEffect(() => {
    getBlogById();
  });

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/${id}`
      );
      setTitle(response.data.data.title);
      setAuthor(response.data.data.author);
      setImage(response.data.data.image);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
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
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailBlog;
