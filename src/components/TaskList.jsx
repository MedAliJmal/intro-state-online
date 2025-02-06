import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((el) => (
        <TaskCard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default TaskList;
