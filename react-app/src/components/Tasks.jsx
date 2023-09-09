import React, { useState } from "react";

const Tasks = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={() => updateHandler(id)}
          checked={isCompleted}
        />
        <button
          disabled={loading}
          className="btn"
          onClick={() => deleteHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tasks;
