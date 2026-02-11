# 📌 Thinkboard – MERN Notes Application

A full-stack notes application built using the **MERN stack** (MongoDB, Express, React, Node.js). Users can create, view, and manage notes through a responsive and modern UI powered by TailwindCSS and DaisyUI.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- React Router
- TailwindCSS
- DaisyUI
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ✨ Features

- Create notes
- View all notes
- View individual note details
- RESTful API integration
- Responsive UI
- Themed interface (DaisyUI – Forest theme)
- Toast notifications for user feedback

---

## 📂 Project Structure

```
Thinkboard-App/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/prelude657/Thinkboard-App.git
cd Thinkboard-App
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5001
```

### 3️⃣ Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| GET    | /api/notes     | Fetch all notes     |
| GET    | /api/notes/:id | Fetch single note   |
| POST   | /api/notes     | Create new note     |

---

## 🛠️ Development Notes

- Vite proxy configured to forward `/api` requests to backend.
- TailwindCSS v3 configured with PostCSS.
- DaisyUI theme: `forest`.

---

## 📈 Future Improvements

- Edit & Delete functionality
- Authentication
- Deployment (Render / Vercel)
- Search and filtering
- Pagination

---

## 👨‍💻 Author

Kurtis Henry  
Full-Stack Developer | QA Automation Engineer
