const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Blog!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a place where you can find interesting articles on various
          topics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Tips & Trick
            </h2>
            <p className="text-gray-700">
              Get the latest tips and tricks in various fields.{" "}
            </p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              Tutorial
            </h2>
            <p className="text-gray-700">
              Learn the steps to master a new skill.
            </p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">
              Opinion
            </h2>
            <p className="text-gray-700">
              Read views and thoughts on various current topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
