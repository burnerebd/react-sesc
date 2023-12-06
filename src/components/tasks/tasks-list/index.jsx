import "./style.css";

import React from "react";
import Task from "../task";
import { Typography } from "@mui/material";

function TaskList({ tasks, deleteTask, startTask, closeTask }) {
  return (
    <section className="section-main">
      <div className="container-card">
        <Typography variant="h1" fontSize={32} fontWeight={500}>
          Lista de Tarefas
        </Typography>
        <hr />
        {tasks &&
          tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <Task
                  id={task.id}
                  title={task.title}
                  member={task.member}
                  category={task.category}
                  status={task.status}
                  idProject={task.idProject}
                  startTask={startTask}
                  closeTask={closeTask}
                  deleteTask={deleteTask}
                />
              </React.Fragment>
            );
          })}
      </div>
    </section>
  );
}

export default TaskList;
