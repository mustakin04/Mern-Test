# 🧩 MERN Task Management Web Application

## 📌 Project Objective

This MERN (MongoDB, Express, React, Node.js) web application helps users securely manage tasks with authentication, responsive UI, and modern security practices.

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux, Tailwind CSS / Material UI  
- **Backend:** Node.js, Express  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT, bcrypt  
- **Security:** Helmet, express-validator, CORS  
- **State Management:** Redux Toolkit  
- **Deployment:** Netlify (Frontend), Render / Vercel / Railway / Heroku (Backend)

---

## 📂 Project Structure & Features

### 1. 🔧 Backend (Node.js + Express + MongoDB)

#### A. Core Server Setup
- Express server initialization
- MongoDB connection with Mongoose
- `.env` configuration using `dotenv`
- Health check and fallback 404 routes

#### B. Authentication System
- Password hashing with `bcrypt`
- JWT generation and verification
- Auth middleware for protecting private routes
- Login, Signup, and Logout endpoints

#### C. Security & Validation
- Input sanitization using `express-validator`
- CORS policy configuration
- Secure HTTP headers with `helmet`
- Centralized error-handling middleware

---

### 2. 💻 Frontend (React + Redux)

#### A. Project Setup
- React project setup (Vite or CRA)
- Global state management using **Redux Toolkit**
- API handling with **Redux Thunk / RTK Query**
- UI with Tailwind CSS or Material UI

#### B. Authentication Flow
- Login/Signup forms with input validation
- JWT stored in **HTTP-only cookies**
- Redux-managed auth state
- Route protection using private routes
- Logout functionality
- Optional: Password reset flow

#### C. Task Management UI
- Responsive dashboard layout
- Task list view in cards or tables
- Create/Edit/Delete task modal
- Mobile and desktop compatibility

---

## ✅ Features Summary

- 🔐 Secure User Authentication  
- 🗂️ CRUD Task Management  
- 🔄 Redux-powered State Control  
- 🌐 Protected Routes  
- 📱 Mobile-Friendly UI  
- 🛡️ Modern Security Practices

---

## 🗂 Folder Structure Example
/backend
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js

/frontend
├── components/
├── features/ (Redux slices)
├── pages/
├── redux/
│ └── store.js
└── App.jsx

