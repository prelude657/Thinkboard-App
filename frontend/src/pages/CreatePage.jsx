import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent action if button is temporarily locked
    if (disabledButton) return;

    // CASE: Empty title or content
    if (!title.trim() || !content.trim()) {

      // Safer click counter logic using functional update
      // Prevents React batching issues
      setClickCount((prev) => {
        const newCount = prev + 1;

        if (newCount >= 10) {
          toast.error("Stop spamming! Wait 5 seconds.", {
            icon: "💀",
            duration: 4000,
          });

          setDisabledButton(true);

          // Re-enable button after 5 seconds
          setTimeout(() => {
            setDisabledButton(false);
          }, 5000);

          return 0; // Reset counter safely
        }

        return newCount;
      });

      toast.error("Both Title and Content are required!", {
        icon: "💀",
        duration: 4000,
      });

      return;
    }

    // Reset click count if fields are valid
    setClickCount(0);
    setLoading(true);

    try {
      await api.post("/notes", { title, content });

      toast.success("Note created!", { duration: 4000 });

      navigate("/");

    } catch (error) {
      console.log("Error creating note", error);

      if (error.response?.status === 429) {
        toast.error("Too many requests! Please wait.", {
          icon: "💀",
          duration: 4000,
        });
      } else {
        toast.error("Failed to create note", {
          icon: "💀",
          duration: 4000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">

          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          {/* Card */}
          <div className="card bg-gray-900 text-white shadow-xl rounded-2xl">
            <div className="card-body p-8">

              <h2 className="card-title text-3xl font-bold mb-6">
                Create New Note
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Title Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter note title..."
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3
                      transition-all duration-200
                      focus:bg-gray-700
                      focus:border-gray-500
                      focus:ring-2 focus:ring-gray-500/30
                      focus:outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Content Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">
                    Content
                  </label>
                  <textarea
                    placeholder="Write your own note here..."
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 h-32
                      transition-all duration-200
                      focus:bg-gray-700
                      focus:border-gray-500
                      focus:ring-2 focus:ring-gray-500/30
                      focus:outline-none resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary px-6 py-2 rounded-lg"
                    disabled={loading || disabledButton}
                  >
                    {loading
                      ? "Creating..."
                      : disabledButton
                      ? "Wait 5s..."
                      : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;