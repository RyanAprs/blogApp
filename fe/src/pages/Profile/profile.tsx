import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [email, setEmail] = useState();
  const [userId, setUserId] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [bio, setBio] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserDetail();
  });

  const getUserDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/${id}`
      );
      setUserId(response.data.data.user_id);
      setEmail(response.data.data.email);
      setName(response.data.data.name);
      setImage(response.data.data.image);
      setBio(response.data.data.bio);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8 text-color-primary text-2xl flex flex-col justify-center items-center">
      {image !== null ? (
        <img
          src={`http://localhost:3000/${image}`}
          alt="profile picture"
          className="w-[250px] h-[250px] shadow-lg object-cover mt-3 border-[1px] border-black  rounded-full"
        />
      ) : (
        <div className=" relative w-[250px] h-[250px] shadow-lg object-cover mt-3 border-[1px] border-black rounded-full flex justify-center items-center">
          <FaUser size={150} className="absolute" />
        </div>
      )}
      <h5 className="text-4xl font-bold">
        <span className="text-color-accent">{name}</span>
      </h5>
      <p>{bio !== null ? <p className="text-lg">{bio}</p> : null}</p>
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          to={`/update/${userId}`}
          className="bg-gray-400 text-color-dark font-bold py-3 px-3 text-lg rounded"
        >
          Edit Profile
        </Link>
        <Link
          to=""
          className="bg-gray-400 text-color-dark font-bold py-3 px-3 text-lg rounded"
        >
          My Blogs
        </Link>
      </div>
    </div>
  );
};

export default Profile;
