import { useState } from "react";
import { createTodo } from "../../services/todoService";

export default function TodoForm({ onSuccess }: any) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    setLoading(true);
    try {
      await createTodo({ title, description: desc });
      setTitle("");
      setDesc("");
      onSuccess();
    } catch (err) {
      alert("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="input-field"
        placeholder="Add details (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        type="submit"
        className="btn-primary"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}