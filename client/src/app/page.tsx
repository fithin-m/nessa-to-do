"use client";

import { useEffect, useState } from "react";
import { getTodos } from "./services/todoService";
import TodoForm from "./components/todo/TodoForm";
import TodoCard from "./components/todo/TodoCard";
import Navbar from "./components/ui/Navbar";
import Pagination from "./components/Pagination";
import Loader from "./components/ui/Loader";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos(page);
      setTodos(data.data || []);
      setTotalPages(Math.ceil((data.total || 0) / (data.limit || 5)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [page]);

  const handleCreateSuccess = () => {
    if (page === 1) {
      fetchTodos();
    } else {
      setPage(1);
    }
  };

  return (
    <div className="app-container">
      <Navbar />

      <TodoForm onSuccess={handleCreateSuccess} />

      {loading ? (
        <Loader />
      ) : (
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">No tasks to display. Add one above!</div>
          ) : (
            todos.map((todo: any) => (
              <TodoCard key={todo._id} todo={todo} refresh={fetchTodos} />
            ))
          )}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
}