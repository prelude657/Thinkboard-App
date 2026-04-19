# 🧠 MERN Stack Thinkboard

A full-stack MERN application for creating, managing, and organizing notes, built with a focus on performance, reliability, and production-ready backend architecture.

---

## 🚀 Overview

Thinkboard is a modern note management application that allows users to create, edit, and manage notes through a responsive React interface backed by a scalable Node.js API.

While the core functionality supports full CRUD operations, the primary focus of this project is implementing real-world backend engineering practices such as rate limiting, fault tolerance, and external service resilience using Upstash Redis.

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Infrastructure & Services
- Upstash Redis (serverless)
- REST APIs
- Middleware architecture

---

## 🧩 Core Features

### 📝 Notes Management
- Create, read, update, and delete notes
- Responsive UI with real-time updates
- Clean component-based React architecture

---

### ⚡ API Rate Limiting
To protect the API from abuse and excessive requests, a rate limiter was implemented using Upstash Redis.

**Implementation Details:**
- Sliding window rate limiting algorithm
- Per-user request tracking using IP address
- Middleware-based integration for scalability

**Impact:**
- Prevents spam and abuse
- Ensures fair usage across users
- Improves API stability under load

---

### 🛡️ Fault-Tolerant Backend Design

A key focus of this project was ensuring the backend remains stable even when external services fail.

**Approach:**
- Wrapped Redis calls in try/catch blocks
- Implemented graceful fallback logic
- Allowed requests to proceed if Redis is unavailable

**Result:**
- No application crashes due to Redis downtime
- Improved system reliability
- Production-ready error handling strategy

---

### 🔄 Redis Keep-Alive Strategy

Upstash Redis (free tier) can become inactive after periods of no usage. To prevent this:

**Solution:**
- Implemented a background keep-alive process using `setInterval`
- Periodically sends a ping to Redis

**Benefit:**
- Prevents database inactivity
- Ensures consistent availability of rate limiting service

---

## 📁 Project Structure


backend/
├── config/
│ ├── db.js
│ ├── upstash.js
├── middleware/
│ ├── rateLimiter.js
├── routes/
│ ├── notesRoutes.js
├── src/
│ ├── server.js

frontend/
├── components/
├── pages/
├── App.jsx


---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:


UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
MONGO_URI=your_mongodb_connection_string
PORT=5001


---

## ▶️ Getting Started

### 1. Install dependencies

npm install


### 2. Run the backend server

npm run dev


### 3. Run the frontend (if separate)

npm run dev


---

## 🧠 Engineering Concepts Demonstrated

This project highlights several important software engineering principles:

- Full-stack application development using MERN
- RESTful API design and routing
- Middleware-based architecture in Express
- External service integration (Redis)
- Rate limiting and request control
- Fault tolerance and graceful degradation
- Background processes for service reliability

---

## 🚧 Future Improvements

- User authentication (JWT or OAuth)
- Role-based access control
- Deployment (Render, Vercel, or AWS)
- Automated testing (unit and integration tests)
- Logging and monitoring

---

## 🤝 Connect

If you're interested in collaborating or discussing opportunities, feel free to reach out or connect with me on LinkedIn.
