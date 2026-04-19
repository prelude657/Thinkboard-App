# 🧠 MERN Stack Thinkboard

A full-stack MERN application for creating, managing, and organizing notes, built with a focus on performance, reliability, and scalable backend architecture.

---

## 🚀 Overview

This project goes beyond basic CRUD by implementing real-world backend patterns such as rate limiting, fault tolerance, and external service integration.

Users can create, edit, and manage notes through a responsive interface backed by a robust API.

---

## 🛠️ Tech Stack

**Frontend**
- React  
- JavaScript (ES6+)  
- CSS  

**Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Infrastructure**
- Upstash Redis (serverless)  
- REST APIs  
- Middleware architecture  

---

## 🔥 Key Features

### 📝 Notes Management
- Create, update, and delete notes  
- Dynamic UI with real-time updates  
- Clean and responsive interface  

### ⚡ Rate Limiting
- Implemented API rate limiting using Upstash Redis  
- Sliding window algorithm to control request flow  
- Prevents API abuse and improves stability  

### 🛡️ Fault-Tolerant Backend
- Graceful fallback if Redis is unavailable  
- Prevents application crashes due to external service failures  
- Ensures consistent API availability  

### 🔄 Keep-Alive System
- Background process to maintain Redis activity  
- Prevents inactivity timeouts in serverless environments  
- Improves reliability of external services  

---

## 📁 Project Structure


backend/
├── config/
├── middleware/
├── routes/
├── src/server.js

frontend/
├── components/
├── pages/


---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:


UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
MONGO_URI=your_mongodb_connection
PORT=5001


---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Run backend
npm run dev
🧠 What This Project Demonstrates
Full-stack MERN development
API design and middleware patterns
Integration with external services (Redis)
Error handling and system resilience
Scalable backend architecture
