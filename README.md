Connectverse: A Full-Stack PERN Authentication System
Overview
Connectverse is a robust, full-stack web application built to demonstrate a complete user authentication system. Leveraging the PERN stack (PostgreSQL, Express.js, React, Node.js), it provides a secure and intuitive platform for user registration and login. The project showcases a clean architecture and best practices in both frontend and backend development, including client-side form validation, secure password handling, and token-based authentication.

Key Features
User Registration: A secure signup form to create a new user account with robust validation.

User Login: A dedicated login page with JWT-based authentication for secure access.

Form Validation: Real-time client-side form validation for an improved user experience.

Responsive UI: A modern, responsive user interface built with React and styled with Bootstrap.

Dark Mode: A built-in dark theme for a better user experience.

Getting Started
Follow these steps to set up and run the project on your local machine.

1. Clone the repository
git clone <repository_url>
cd <project_folder>

2. Backend Setup
Navigate to the backend folder, set up your database, and start the server.

Database: Ensure you have PostgreSQL installed and running. Create a new database for this project (e.g., connectverse).

Environment File: Create a .env file in the backend folder with your database credentials:
PG_USER=your_username
PG_HOST=your_host
PG_DATABASE=connectverse
PG_PASSWORD=your_password
PG_PORT=5432

Install & Start:
cd backend
npm install
npm start

3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and start the React application.

cd frontend
npm install
npm start
The application will now be running on http://localhost:3000.

Technologies Used
Frontend
React: For building the user interface.

React Router DOM: For handling navigation.

Axios: For API requests.

Bootstrap: For responsive styling.

Framer Motion: For animations.

Backend
Node.js & Express.js: For the server-side framework.

PostgreSQL: The relational database.

PG: For database connectivity.

Bcrypt.js: For secure password hashing.

JSON Web Token (JWT): For authentication.

Author
GitHub: https://github.com/muskan040399

LinkedIn: https://www.linkedin.com/in/muskan-kumari-b115b12a1