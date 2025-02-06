import React from "react";

const TaskCard = ({ el }) => {
  return (
    <div>
      <h5 id={el.isDone ? "comp" : "uncomp"}>{el.action}</h5>
      <button>Delete</button>
      <button>{el.isDone ? "Undo" : "Complete"}</button>
    </div>
  );
};

export default TaskCard;
