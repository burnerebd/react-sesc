// import dataMembers from '../../../data/data-members.json';
// import dataProjects from '../../../data/data-projects.json';
import dataTeams from "../../../data/data-teams.json";
import React, { useState } from "react";
import "./style.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import ptBR from "date-fns/locale/pt-BR";

function ProjectForm({ addProject }) {
  // const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [currentTeam, setCurrentTeam] = useState("");

  // const [members] = useState(dataMembers);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
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
    //Adicionar uma nova tarefa à lista de tarefas
    addProject(
      currentTitle,
      currentDescription,
      currentStartDate,
      currentDeadline,
      currentEndDate,
      currentClient,
      currentStatus,
      currentTeam,
    );
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
        <Typography variant="h1" fontSize={32} fontWeight="bold">
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
          <div>
            <LocalizationProvider
              adapterLocale={ptBR}
              dateAdapter={AdapterDateFns}
            >
              <DatePicker />
            </LocalizationProvider>
          </div>
          <Button
            size="large"
            sx={{ mt: 5, mb: 2 }}
            variant="outlined"
            className="btn-register"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ProjectForm;
