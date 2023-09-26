import React, { useState } from 'react'
import './App.css'
import dataCategories from './data/data-categories.json'
import dataMembers from './data/data-members.json'
import dataTasks from './data/data-tasks.json'

function App() {
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [tasks, setTasks] = useState(dataTasks);

  // console.log(dataCategories)

  return (
    <>
      <section className='section-main'>
        <div className='container-card'>
          <h1>
            Cadastrar Tarefa
          </h1>
          <hr />
          <form>
            <label htmlFor='title'>Título</label>
              <input 
                type='text'
                name='title'
                id='title'
                placeholder='Digite o titulo da tarefa'
              />
            <label htmlFor='category'>Categoria</label>
              <select name='category'>
                <option value=''>Selecione uma categoria</option>
                {categories && categories.map((category => {
                  return (
                    <React.Fragment key={category.id}>
                      <option value={category.title}>{category.title}</option>
                    </React.Fragment>
                  )}))}
              </select>
            <label htmlFor='members'>Members</label>
              <select name='members'>
                <option value=''>Selecione um membro da equipe</option>
                {members && members.map((member => {
                  return (
                    <React.Fragment>
                        <option value={member.profile}>{member.name}</option>
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
                      <h2 className='task-title'>Programar tela de listagem de produtos</h2>
                      <span className='task-member'>andersonstudioa</span>
                      <span className='task-category'>Development</span>
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
            <div className='task'>
              <img src='https://github.com/andersonstudioa.png' className='task-img-member'>
                </img>
                <div className='task-content'>
                  <h2 className='task-title'>Programar tela de listagem de produtos</h2>
                  <span className='task-member'>andersonstudioa</span>
                  <span className='task-category'>Development</span>
                  <span className='task-todo'>todo</span>
                </div>
                <div className='task-actions'>
                  <button className='btn-start'>Iniciar</button>
                  <button className='btn-close'>Finalizar</button>
                  <button className='btn-delete'>x</button>
                </div>
            </div>
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





