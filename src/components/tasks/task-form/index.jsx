import dataCategories from "../../../data/data-categories.json";
import dataMembers from "../../../data/data-members.json";
import React, { useState, useContext } from "react";
import { ProjectContext } from "../../../context/project-context";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

function TaskForm({ addTask }) {
  const { projects } = useContext(ProjectContext);

  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentMember, setCurrentMember] = useState("");
  const [currentProject, setCurrentProject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if (!currentTask || !currentCategory || !currentMember || !currentProject) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addTask(currentTask, currentCategory, currentMember, currentProject);
    setCurrentTask("");
    setCurrentCategory("");
    setCurrentMember("");
    setCurrentProject("");
    alert("Tarefa cadastrada com sucesso!");
  };

  return (
    <section className="section-main">
      <div className="container-card">
        <Box
          sx={{
            "& .MuiTextField-root": { marginY: 1 },
          }}
        >
          <Typography variant="h1" fontSize={32} fontWeight={500}>
            Cadastrar Tarefa
          </Typography>
          <hr />
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="title"
              label="Título"
              variant="outlined"
              placeholder="Digite o título"
              value={currentTask}
              onChange={(event) => setCurrentTask(event.target.value)}
            />
            <TextField
              select
              fullWidth
              id="category"
              label="Categoria"
              variant="outlined"
              value={currentCategory}
              onChange={(event) => setCurrentCategory(event.target.value)}
            >
              <MenuItem value="">Selecione uma categoria</MenuItem>
              {categories &&
                categories.map((category) => {
                  return (
                    <MenuItem key={category.id} value={category.title}>
                      {category.title}
                    </MenuItem>
                  );
                })}
            </TextField>
            <TextField
              select
              fullWidth
              id="member"
              label="Membro"
              variant="outlined"
              value={currentMember}
              onChange={(event) => setCurrentMember(event.target.value)}
            >
              <MenuItem value="">Selecione um membro</MenuItem>
              {members &&
                members.map((member) => {
                  return (
                    <MenuItem key={member.id} value={member.profile}>
                      {member.name}
                    </MenuItem>
                  );
                })}
            </TextField>
            <TextField
              select
              fullWidth
              id="project"
              label="Projeto"
              variant="outlined"
              value={currentProject}
              onChange={(event) => setCurrentProject(event.target.value)}
            >
              <MenuItem value="">Selecione um membro</MenuItem>
              {projects &&
                projects.map((project) => {
                  return (
                    <MenuItem key={project.id} value={project.id}>
                      {project.title}
                    </MenuItem>
                  );
                })}
            </TextField>
            <hr />
            <Button sx={{borderRadius: 20}} color="success" variant="contained" type="submit">Cadastrar</Button>
          </form>
        </Box>
      </div>
    </section>
  );
}

export default TaskForm;
