import React, { FunctionComponent } from "react";
import { Task } from "./task";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task,
}) => (
  <form onSubmit={onAdd}>
    <input className="inputTasks" onChange={onChange} value={task.name} />
    <button className="btnTasks" type="submit">ADD TASK</button>
  </form>
);
