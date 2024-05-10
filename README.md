# BLOG APP
---

## Features

- SignIn, SignUp, Update Profile
- Create Blog, Update Blog, Delete Blog, View Blog
----
## Tech

Dillinger uses a number of open source projects to work properly:

- FrontEnd: ReactJs, Tailwind CSS
- Backend: Node.js, Express.js.
- Database: Uses MongoDB as a NoSQL database to store blog, user.
----
## Installation
Make sure you have Node.js (version 12 or higher) and npm (Node Package Manager) installed on your system. You also need database management software like MongoDB.

Clone the repository

```sh
git clone https://github.com/RyanAprs/blogApp.git
cd blogApp
```

Environment Configuration for ackend:
Copy the .env.example file to .env and adjust the environment variables (such as database URL) according to your development environment.

Install dependencies for frontend and run the app

```sh
cd fe
npm install 
```
```sh
npm run dev
```

Install dependencies for backend and run the app

```sh
cd be
npm install 
```
```sh
npm run dev
```

Access the Application:
After running the backend server and frontend application, you can access the web application through a browser by visiting http://localhost:5173.

----
## API DOCUMENTATION
Base Url = http://localhost:3000/api/v1

| Endpoint | Usage | Example |
| ------ | ------ |----------|
| blogs |``/blogs`` |-|
| Get blog by id | ``/blogs/:id`` |``/blogs/1``|
| Login | ``/auth/login`` | - | 
| Register | ``/auth/register`` | - |
| Reset password | ``/auth/reset-password`` | - |

build with ❤️
