import { deleteTodo, updateTodo } from "../../services/todoService";

export default function TodoCard({ todo, refresh }: any) {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTodo(todo._id);
      refresh();
    }
  };

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = Number(e.target.value);
    await updateTodo(todo._id, { status: newStatus });
    refresh();
  };

  return (
    <div className="todo-card">
      <div className="todo-header">
        <h2 className="todo-title">{todo.title}</h2>
      </div>
      
      {todo.description && (
        <p className="todo-desc">{todo.description}</p>
      )}

      <div className="todo-footer">
        <select 
          className={`status-select status-${todo.status}`} 
          value={todo.status} 
          onChange={handleStatusChange}
        >
          <option value={0}>Pending</option>
          <option value={1}>In-Progress</option>
          <option value={2}>Completed</option>
        </select>

        <div className="action-buttons">
          <button className="btn-icon btn-danger" onClick={handleDelete} title="Delete Task">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}