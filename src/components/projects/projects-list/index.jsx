import { Typography } from "@mui/material";
import Project from "../project";

function ProjectsList({ projects, deleteProject, editProject }) {
  return (
    <section className="section-main">
      <div className="container-card">
        <Typography variant="h1" fontSize={32} fontWeight={500}>
          Lista de Projetos
        </Typography>
        <hr />

        {projects &&
          projects.map((project) => {
            return (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                startDate={project.startDate}
                deadline={project.deadline}
                endDate={project.endDate}
                client={project.client}
                idTeam={project.idTeam}
                status={project.status}
                deleteProject={deleteProject}
                editProject={editProject}
              />
            );
          })}
      </div>
    </section>
  );
}

export default ProjectsList;
