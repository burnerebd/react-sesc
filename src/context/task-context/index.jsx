import { createContext, useState } from "react";
import dataTasks from "../../data/data-tasks.json";

export const TaskContext = createContext({});

export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState(dataTasks);

  const addTask = (title, category, member) => {
    if (!title || !category || !member) {
      alert("Todos os campos são obrigatórios");
      return;
    }
    const newTaskArr = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo",
      },
    ];
    setTasks(newTaskArr);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((task) =>
      task.id !== id ? task : null,
    );
    setTasks(filteredTasks);
  };

  const startTask = (id) => {
    const newTasks = [...tasks]; // assign method might be used if we wanted to change the 'tasks' array directly instead of creating a new one
    newTasks.map((task) => {
      if (task.id === id) task.status = "doing";
      else task;
    });
    setTasks(newTasks);
  };

  const closeTask = (id) => {
    const newTasks = [...tasks]; // assign method might be used if we wanted to change the 'tasks' array directly instead of creating a new one
    newTasks.map((task) => {
      if (task.id === id) task.status = "done";
      else task;
    });
    setTasks(newTasks);
  };
    return (
        <TaskContext.Provider value={{tasks, addTask, startTask, deleteTask, closeTask}}>
            {children}
        </TaskContext.Provider>
    )
}
