# Study.com - Student Dashboard

This project leverages NestJS for the backend and React with TypeScript for the frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Backend](#backend)
- [Frontend](#frontend)
- [Project Video](#project-video)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview
Study.com is a comprehensive Student Dashboard where students can take quizzes and view announcements. The project is built using modern web development technologies to ensure scalability and maintainability.

## Backend
The backend is developed using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

### Features
- **JWT Authentication**: Utilizes JSON Web Token (JWT) for user authentication, storing tokens in cookies, and implementing guards for protected endpoints.
- **Database**: Uses MongoDB as the NoSQL database, with Mongoose for Object Data Modeling (ODM).
- **Password Hashing**: Employs bcrypt for hashing passwords to enhance security.
- **Validation**: Implements validation for each endpoint using class-validators and pipes.
- **CRUD Operations**: Provides CRUD operations for managing quizzes and announcements.

## Frontend
The frontend is built using React with TypeScript, ensuring a type-safe and robust application.

### Features
- **UI Library**: Utilizes Material UI for a responsive and attractive user interface.
- **State Management**: Implements state management with Redux Toolkit for managing quizzes, including score calculation and storage.
- **Routing**: Sets up routing with authentication checks to prevent unauthorized access.
- **Form Validation**: Uses react-hook-form for form validation, creating custom components as needed.
- **Internationalization**: Prepares the app for localization using i18next.
- **Unit Testing**: Employs Jest and Testing Library for unit testing components.
- **API Integration**: Integrates the backend with the frontend through RESTful APIs using Axios.

## Project Video
[You can click here to see the video](https://www.youtube.com/watch?v=I19ANWdcO5I)

## Installation
To set up the project locally, follow these steps:

### Backend
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up the environment variables: Create a `.env` file based on `.env.example`
5. Start the development server:
    ```bash
    npm run start:dev
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. Use the provided endpoints to interact with the backend.
