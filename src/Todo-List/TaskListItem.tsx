import React, { FunctionComponent } from "react";
import { Task } from "./task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li className="taskListItem">
      {task.name} <button className="removeBtn" onClick={onClick}>X</button>
    </li>
  );
};
