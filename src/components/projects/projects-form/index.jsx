import './style.css'

import React, { useState } from 'react'
//import '../../../App.css'

import dataProjects from '../../../data/data-projects.json'
import dataCategories from '../../../data/data-categories.json'
import dataMembers from '../../../data/data-members.json'

function ProjectForm({addProject}) {

  const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");

  const [currentProject, setCurrentProject] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentMember, setCurrentMember] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validação dos campos
    if(!currentProject || !currentDescription || !currentMember) {
      alert ("Todos os campos são obrigatórios");
      return;
    }
    //console.log(currentProject, currentDescription, currentMember);
    addProject(currentProject, currentDescription, currentMember);
    setCurrentProject("");
    setCurrentDescription("");
    setCurrentMember("");
  }

  return (
    <section className='section-main'>
        <div className='container-card'>
          <h1>Cadastrar tarefa</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input type='text' name='title' value={currentProject} onChange={(e) => setCurrentProject(e.target.value)} placeholder='Digite o título da tarefa'/>
            <label>Categoria</label>
            <select name='description' value={currentDescription} onChange={(e) => setCurrentDescription(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              {categories && categories.map((description) => {
                return (
                  <React.Fragment key={description.id}>
                    <option value={description.title}>{description.title}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <label>Membro</label>
            <select name='member' value={currentMember} onChange={(e) => setCurrentMember(e.target.value)}>
              <option value="">Selecione um membro da equipe</option>
              {members && members.map((member) => {
                return (
                  <React.Fragment key={member.id}>
                    <option value={member.profile}>{member.name}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <button className='btn-register' type='submit'>Cadastrar</button>
          </form>
        </div>
      </section>
  )
}

export default ProjectForm; 
