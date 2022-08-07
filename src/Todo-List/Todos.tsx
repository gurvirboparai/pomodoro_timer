import React, { useEffect, useState } from "react";
import { Task } from "./task";
import { NewTaskForm } from "./NewTaskForm";
import { TasksList } from "./TasksList";
import "./Todo.css";

interface State {
  newTask: Task;
  tasks: Task[];
}

const Todos = () => {
  const [newTask, setNewTask] = useState<State["newTask"]>({
    id: 0,
    name: "",
  });
  const [todos, setTodos] = useState<State["tasks"]>([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: State["newTask"] = { id: todos.length + 1, name: newTask.name };
    if (newTask.name === "") {
      setErrorVisible(true)
    } else {
      setTodos((prev) => [...prev, task]);
      setIsListOpen(true);
      setErrorVisible(false)
      newTask.name="";
    }
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prev) => {
      return { ...prev, name: event.target.value };
    });
  };

  const deleteTask = (taskToDelete: Task) => {
    const newTasks = todos.filter((task) => task.id !== taskToDelete.id);
    setTodos(newTasks);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setErrorVisible(false);
    }, 3000)


  
    return () => {
      clearTimeout(timer)
    }
  }, [errorVisible])
  

  return (
    <div className="container">
      <div className="tasksContainer">
        <h2>Tasks</h2>
        <NewTaskForm
          task={newTask}
          onAdd={addTask}
          onChange={handleTaskChange}
        />
        <details className="details" open={isListOpen}>
          <summary>List of Tasks</summary>
          <TasksList tasks={todos} onDelete={deleteTask} />
        </details>
      </div>
      {errorVisible && 
      <div className="snackbar">You entered no task!</div>
      }
    </div>
  );
};

export default Todos;
