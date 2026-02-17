import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
  <div className="relative min-h-screen w-full">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_60%,#00ff9d40_100%)]" />

  <Toaster position="top-center" />

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/create" element={<CreatePage />} />
    <Route path="/note/:id" element={<NoteDetailPage />} />
  </Routes>
</div>

  );
};

export default App;



