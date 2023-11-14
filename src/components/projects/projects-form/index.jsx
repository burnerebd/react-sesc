// import dataMembers from '../../../data/data-members.json';
// import dataProjects from '../../../data/data-projects.json';
import dataTeams from "../../../data/data-teams.json";
import React, { useState } from "react";
import "./style.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import ptBR from "date-fns/locale/pt-BR";

function ProjectForm({ addProject }) {
  // const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [currentTeam, setCurrentTeam] = useState("");

  // const [members] = useState(dataMembers);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(null);
  const [currentDeadline, setCurrentDeadline] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if (
      !currentTitle ||
      !currentDescription ||
      !currentStartDate ||
      !currentDeadline ||
      !currentEndDate ||
      !currentClient ||
      !currentStatus ||
      !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

  const addProject = (title, category, member) => {
    if(!title || !category || !member) return;
    const newProjectArray = [
      ...projects,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo"
      }
    ];
    setProjects(newProjectArray);
  }

  const deleteProject = (id) => {
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter(project => project.id !== id ? project : null);
    setProjects(filteredProjects);
  }


    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate("");
    setCurrentDeadline("");
    setCurrentEndDate("");
    setCurrentClient("");
    setCurrentTitle("");
    setCurrentStatus("");
    setCurrentTeam("");

    alert("Projeto cadastrado com sucesso!");
  };

  return (
    <section className="section-main">
      <div className="container-card">
        <Box sx={{'& MultiTextField-root': {marginY: 1, width: '100%'}}}>
        <Typography variant="h1" fontSize={32} fontWeight={500}>
          Cadastrar projeto
        </Typography>
        <hr />
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid" }}>
            <TextField
              sx={{ mb: 3 }}
              label="Tarefa"
              id="title"
              placeholder="Digite o título"
              value={currentTitle}
              onChange={(event) => setCurrentTitle(event.target.value)}
            />
            <TextField
              multiline
              sx={{ mb: 3 }}
              label="Descrição"
              id="description"
              placeholder="Digite a descrição do projeto"
              rows={4}
              value={currentDescription}
              onChange={(event) => setCurrentDescription(event.target.value)}
            />
            <TextField
              select
              sx={{ mb: 3 }}
              label="Equipe"
              id="team"
              value={currentTeam}
              onChange={(event) => setCurrentTeam(event.target.value)}
            >
              <MenuItem value="">Selecione uma equipe</MenuItem>
              {teams &&
                teams.map((team) => {
                  return (
                    <MenuItem key={team.id} value={team.id}>
                      {team.name}
                    </MenuItem>
                  );
                })}
            </TextField>
          </div>
          <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "column",md: "row",lg:"row",xl:"row"}, gap: {xs: '0', sm: '0', md: '1em', lg: '1em', xl: '1em'}}}>
            <LocalizationProvider
              adapterLocale={ptBR}
              dateAdapter={AdapterDateFns}
            >
              <DatePicker width="33%" id="startDate" label="Data de Início" />
            </LocalizationProvider>

            <LocalizationProvider
              adapterLocale={ptBR}
              dateAdapter={AdapterDateFns}
            >
              <DatePicker width="33%" id="endDate" label="Data de Finalização" />
            </LocalizationProvider>

            <LocalizationProvider
              adapterLocale={ptBR}
              dateAdapter={AdapterDateFns}
            >
              <DatePicker width="33%" id="deadline" label="Previsão de Entrega" />
            </LocalizationProvider>
          </Box>
      <hr />

      < Button
            size="large"
            sx={{ mt: 5, mb: 2 }}
            variant="outlined"
            className="btn-register"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
</Box>
      </div>
    </section>
  );
}

export default ProjectForm;
