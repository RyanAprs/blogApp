**RYAN BLOGS APP**

*Architecture*

1. Frontend
Technology: ReactJS and Tailwind CSS.
Function: Building a responsive and appealing user interface.
Main Components: React components and Tailwind CSS styles.
Interaction: Communicates with the backend through RESTful HTTP requests for CRUD operations.

2 .Backend
Technology: Node.js, Express.js, and MongoDB.
Function: Handling business logic, data storage, and communication with the database.
Main Components: Express routes, MongoDB models, and MongoDB database.
Interaction: Provides APIs to manage blogs, users, and comments.

3. Security
Features: Input validation, user authentication using JWT, and access control.
Implementation: Integrated on both sides, frontend and backend, to protect sensitive data and prevent attacks.

4. Data Storage
Database: Uses MongoDB as a NoSQL database to store blog, user.

*Installation Instructions*
1. Prerequisite Requirements:
Make sure you have Node.js (version 12 or higher) and npm (Node Package Manager) installed on your system. You also need database management software like MongoDB.
2. Clone the repository
git clone https://github.com/RyanAprs/blogApp.git [Copy](#)
3. Install Dependencies:
Navigate to the cloned project directory and install all dependencies by running the following command:
$cd blogApp
$npm install
5. Environment Configuration:
Copy the .env.example file to .env and adjust the environment variables (such as database URL) according to your development environment.
6. Run the Backend Server:
To start the backend server, use the command:
``cd be
  npm run dev
``
7. Run the Frontend Application:
Open a new terminal, navigate to the client directory, and run the frontend application with the command:
``cd fe
  npm run dev
``
8. Access the Application:
After running the backend server and frontend application, you can access the web application through a browser by visiting http://localhost:5173.
