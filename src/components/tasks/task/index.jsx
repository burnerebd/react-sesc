import { useContext, useState } from "react";
import { ProjectContext } from "../../../context/project-context";
import { Typography } from "@mui/material";
import dataMembers from "../../../data/data-members.json";
import "./style.css";

function Task({
  id,
  title,
  member,
  category,
  status,
  idProject,
  startTask,
  closeTask,
  deleteTask,
}) {

  const { projects } = useContext(ProjectContext);

  const getProjectTitleById = (id) => {
    const filteredProject = projects.find((currentProject) => currentProject.id == id )
    return filteredProject.title;
  }
  
  const [members] = useState(dataMembers);

  const getMemberId = (memberProfile) => {
    const filteredMember = members.find((currentMember) => currentMember.profile == memberProfile);
    return filteredMember.id;
  }

  return (
    <>
      <div className="task">
        <img
          src={`https://picsum.photos/id/${getMemberId(member)+35}/200/200`}
          className="task-img-member"
        />
        <div className="task-content">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" marginBottom={2}>
            {`Projeto: ${getProjectTitleById(idProject)}`}
          </Typography>
          <span className="task-member">{member}</span>
          <span className="task-category">{category}</span>
          <span className={`task-${status}`}>{status}</span>
        </div>
        <div className="task-actions">
          <button className="btn-start" onClick={() => startTask(id)}>
            Iniciar
          </button>
          <button className="btn-close" onClick={() => closeTask(id)}>
            Finalizar
          </button>
          <button className="btn-delete" onClick={() => deleteTask(id)}>
            x
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Task;
