import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // 🔹 Fetch Note
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error fetching note:", error);
        toast.error("Failed to load note");
        navigate("/");
      } finally {
        // ✅ Always stop loading, success or failure
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

    if(loading){
      return(<div className= "min-h-screen bg-base-200 flex items-center justify-center" >
        <LoaderIcon className="animate-spin size-10"/>
      </div>
      );
    }





  // 🔹 Update Note
  const handleSave = async () => {
    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      // ✅ Always stop saving spinner
      setSaving(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Note Detail Page</h2>
      <button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default NoteDetailPage;