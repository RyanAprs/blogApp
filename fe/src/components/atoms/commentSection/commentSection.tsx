import { FaArrowAltCircleRight, FaTrash } from "react-icons/fa";

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
  return (
    <div className="rounded-sm flex flex-col gap-3">
      <h3 className="text-2xl">Comments</h3>
      <div className="py-2 flex flex-col h-[250px] overflow-y-auto border-2 rounded">
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((comment) => {
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
        )}
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="w-full p-4 rounded"
          placeholder="Comment..."
        />
        <button className="bg-gray-400 py-2 px-6 rounded">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
