Connectverse: A Full-Stack PERN Authentication System
Overview
Connectverse is a robust, full-stack web application designed to demonstrate a complete user authentication system. Built with the PERN stack (PostgreSQL, Express.js, React, Node.js), it provides a secure and intuitive platform for user registration and login. The project showcases best practices in frontend and backend development, including client-side form validation, secure password handling, and token-based authentication.

Features
User Registration: A clean signup form to create a new user account.

User Login: A secure login page to access the application.

Form Validation: Client-side validation for a better user experience.

JWT Authentication: Uses JSON Web Tokens for secure session management.

Responsive UI: A modern, responsive user interface built with React and Bootstrap.

Dark Mode: A stylish dark theme for a better user experience.

Technologies Used
Frontend
React: For building the user interface.

React Router DOM: For handling navigation between pages.

Axios: For making API requests to the backend.

Bootstrap: For responsive and consistent styling.

Framer Motion: For adding smooth animations.

Backend
Node.js & Express.js: The server-side framework.

PostgreSQL: The relational database for storing user data.

PG: The Node.js library for connecting to and querying the PostgreSQL database.

Bcrypt.js: For securely hashing passwords.

JSON Web Token (JWT): For handling authentication and sessions.


Getting Started
Follow these steps to set up and run the project on your local machine.

1. Clone the repository
Bash

git clone <repository_url>
cd <project_folder>
2. Backend Setup
Navigate to the backend folder, set up your database, install the dependencies, and start the server.

Database: Ensure you have PostgreSQL installed and running. Create a new database for this project (e.g., connectverse).

Environment File: Create a .env file in the backend folder with your database credentials:

PG_USER=your_username
PG_HOST=your_host
PG_DATABASE=connectverse
PG_PASSWORD=your_password
PG_PORT=5432
Install & Start:

Bash

cd backend
npm install
npm start
3. Frontend Setup
Open a new terminal, navigate to the frontend folder, install the dependencies, and start the React application.

Bash

cd frontend
npm install
npm start
The application will now be running on http://localhost:3000.

Author
 Name : Muskan Kumari

GitHub: [https://github.com/muskan040399]

LinkedIn: [https://www.linkedin.com/in/muskan-kumari-b115b12a1]