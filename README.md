# Access Control System

This is DTBAC system with a React frontend and Express.js backend.

## Project Structure

- /access-main: Frontend React application using Redux for state management
- /server: Backend Express.js API with MongoDB database

## Prerequisites

- Node.js (v16+)
- npm or yarn

## Setup Instructions

### Installing Dependencies

1. Install backend dependencies:
   
   cd server
   npm install
   

2. Install frontend dependencies:
   
   cd access-main
   npm install
   

### Environment Setup

Create a .env file in the server directory with the following content:


PORT=5000
MONGODB_URI="mongodb+srv://Admin:Admin%40123@cluster0.hzrdh.mongodb.net/dtbac"
MONGO_URL="mongodb+srv://Admin:Admin%40123@cluster0.hzrdh.mongodb.net/dtbac"
JWT_TOKEN_SECRET=f758de9da538c508761cca4dc8b9caa1cd3113767b1c2e9f1002d4094b1328ef5712faedacdf83eeb066a93150b57ec45fc8f39f2fee9a180d21197672c5c719
SESSION_SECRET=dtbac-session-secret
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000,http://localhost:5173


### Running the Application

1. Start the backend:
   
   cd server
   npm run dev
   
2. In a separate terminal, start the frontend:
   
   cd access-main
   npm run dev
   

## Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## Troubleshooting

If you encounter a "port in use" error, you can:

1. Change the port in both the server's .env file and the frontend's API configuration
   - Server .env: Change PORT=5000 to another port
   - Frontend API: Update baseDomain in access-main/src/utils/axios.jsx

2. Kill the process using the port:
   
   lsof -i:5000
   kill -9 <PID>
   



## Login Credentials

you can login with:
- Email: superadmin@gmail.com
- Password: Admin@123