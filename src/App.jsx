import React, { useState } from 'react'
import './App.css'
import dataCategories from './data/data-categories.json'
import dataMembers from './data/data-members.json'
import dataTasks from './data/data-tasks.json'

function App() {
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [tasks, setTasks] = useState(dataTasks);
  const [currentTask, setCurrentTask] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentMembers, setCurrentMembers] = useState('');

  const addTask = (title, category, member) => {
    if (!title || !category || !member) return;
    const newTaskArr = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo",
      }
    ];
    setTasks(newTaskArr);
  }

  const clearValues = (...functions) => {
    for (const elem of functions) elem("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentTask || !currentCategory || !currentMembers) {
      alert("Todos os campos são obrigatórios");
      return;
    }
    addTask(currentTask, currentCategory, currentCategory);
    clearValues(setCurrentCategory, setCurrentMembers, setCurrentTask);
  }


  return (
    <>
      <section className='section-main'>
        <div className='container-card'>
          <h1>
            Cadastrar Tarefa
          </h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Título</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Digite o titulo da tarefa'
              value={currentTask}
              onChange={(event) => setCurrentTask(event.target.value)}
            />
            <label htmlFor='category'>Categoria</label>
            <select
              name='category'
              value={currentCategory}
              onChange={(event) => {setCurrentCategory(event.target.value)}}
            >
              <option value=''>Selecione uma categoria</option>
              {categories && categories.map((category => {
                return (
                  <React.Fragment key={category.id}>
                    <option value={category.title}>{category.title}</option>
                  </React.Fragment>
                )
              }))}
            </select>
            <label htmlFor='member'>Members</label>
            <select
              name='member'
              value={currentMembers}
              onChange={(event) => {setCurrentMembers(event.target.value)}}
            >
              <option value=''>Selecione um membro da equipe</option>
              {members && members.map((member => {
                return (
                  <React.Fragment key={member.id}>
                    <option value={member.name}>{member.name}</option>
                  </React.Fragment>
                )
              }))}
            </select>
            <button className='btn-register'>
              Cadastrar
            </button>
          </form>
        </div>
      </section>
      <section>
        <section className='section-main'>
          <div className='container-card'>
            <h1>
              Lista de Tarefas
            </h1>
            <hr />
            {tasks && tasks.map((task) => {
              return (
                <React.Fragment key={task.id}>
                  <div className='task'>
                    <img src={`https://github.com/${task.member}.png`} className='task-img-member'>
                    </img>
                    <div className='task-content'>
                      <h2 className='task-title'>{task.title}</h2>
                      <span className='task-member'>{task.member}</span>
                      <span className='task-category'>{task.category}</span>
                      <span className={`task-${task.status}`}>{task.status}</span>
                    </div>
                    <div className='task-actions'>
                      <button className='btn-start'>Iniciar</button>
                      <button className='btn-close'>Finalizar</button>
                      <button className='btn-delete'>x</button>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <footer className='footer-main'>
            <p>
              <strong>
                Intodução ao Desenvolvimento Front-end com React
              </strong>
            </p>
          </footer>
        </section>
      </section>
    </>
  )
}

export default App