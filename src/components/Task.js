import React, { useState } from "react";

function Task({ text, category }) {
  const [isDeleted, setIsDeleted] = useState(false)
  

  const handleDelete = () => {
    setIsDeleted(!isDeleted)
  }

  if (isDeleted) { 
    return null
  } else { 
    return (
      <div className="task">
        <div className="label">{ category }</div>
        <div className="text">{ text }</div>
        <button className="delete" onClick={handleDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Task;
