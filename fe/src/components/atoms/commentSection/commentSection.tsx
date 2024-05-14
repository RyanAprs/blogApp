import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const comments = [
  {
    id: 1,
    name: "alip",
    comment: "anjay",
  },
  {
    id: 2,
    name: "ryan",
    comment:
      "anjay gurinjay kura-kura ninjay anskjffbjf jbfuaif iafbdf bfiadnfjaf hfoanf ohfodanf ofnafnij oafndjnfa ojfnwuhee ofnaojn",
  },
];

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [user_id, setUser_id] = useState("");
  const [blog_id, setBlog_id] = useState();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [dataComment, setDataComment] = useState();
  const [dataBlogId, setDataBlogId] = useState();

  const { id } = useParams();
  console.log("from params: ", id);

  if (blog_id === dataBlogId) {
    console.log("sama");
  } else {
    console.log("tidak sama");
  }

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

    setBlog_id(id);

    fetchComment();

    const userData = getUserDataFromCookie();
    if (userData) {
      setUser_id(userData.user_id);
      setName(userData.name);
    }
  }, [id]);

  const fetchComment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/comment/${id}`
      );
      setDataComment(response.data.data);
      console.log("from db:", response.data.data.blog_id);
      setDataBlogId(response.data.data.blog_id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {
      // console.log({
      //   user_id,
      //   blog_id,
      //   comment,
      //   name,
      // });

      const response = await axios.post(
        "http://localhost:3000/api/v1/comment",
        {
          user_id,
          blog_id,
          comment,
          name,
        }
      );

      if (response.data.status_code === 200) {
        window.location.reload();
        console.log(response.data.data);
        console.log("create comment berhasil");
      } else {
        console.log("create comment gagal");
      }
    } catch (error) {
      console.log(error);

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
    <div className="rounded-sm flex flex-col gap-3">
      <h3 className="text-2xl">Comments</h3>
      <div className="py-2 flex flex-col h-[250px] overflow-y-auto border-2 rounded">
        {Array.isArray(dataComment) && dataComment.length > 0 ? (
          dataBlogId === blog_id ? (
            dataComment.map((comment) => {
              return (
                <div className="p-2" key={comment.id}>
                  <div className="p-4 bg-white rounded-xl flex justify-between items-center">
                    <div>
                      <h1>{comment.name}</h1>
                      <p>{comment.comment}</p>
                    </div>
                    <div>
                      <button>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center">
              <h1>No Comment Posted</h1>
            </div>
          )
        ) : (
          <div className="flex justify-center">
            <h1>No Comment Posted</h1>
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}

      {user_id ? (
        <div className="flex gap-3">
          <input
            type="text"
            className="w-full p-4 rounded"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="bg-gray-400 py-2 px-6 rounded"
            onClick={handleCreate}
          >
            <FaArrowAltCircleRight size={40} />
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-5 items-center">
          <h4>You Should Login For Comment</h4>
          <Link to="/login" className="bg-gray-400 px-3 py-2 rounded">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
