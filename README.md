# MERN Stack Website

A full-stack web application built with MongoDB, Express.js, React, and Node.js.

## 📁 Project Structure

```
Demo Site/
├── backend/                    # Node.js + Express Backend
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   └── userController.js  # User logic
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication
│   ├── models/
│   │   └── User.js            # User schema
│   ├── routes/
│   │   └── userRoutes.js      # API routes
│   ├── utils/
│   │   └── errorHandler.js    # Error handling
│   ├── .env                   # Environment variables
│   ├── package.json
│   └── server.js              # Entry point
│
└── frontend/                   # React Frontend
    ├── public/
    ├── src/
    │   ├── assets/            # Images, fonts, etc.
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.css
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── hooks/             # Custom hooks
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Home.css
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Dashboard.css
    │   │   └── Auth.css
    │   ├── services/
    │   │   └── api.js         # API service
    │   ├── styles/
    │   │   ├── index.css
    │   │   └── App.css
    │   ├── utils/             # Utility functions
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_db
JWT_SECRET=your_secret_key
NODE_ENV=development
```

## 🔗 API Endpoints

| Method | Endpoint            | Description      |
|--------|---------------------|------------------|
| POST   | /api/users/register | Register user    |
| POST   | /api/users/login    | Login user       |
| GET    | /api/users/profile  | Get user profile |

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
