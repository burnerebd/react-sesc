import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <section className='section-main'>
        <div className='container-card'>
          <h1>
            Cadastrar Tarefa
          </h1>
          <hr />
          <form>
            <label for='title'>Título</label>
              <input 
                type='text'
                name='title'
                id='title'
                placeholder='Digite o titulo da tarefa'
              />
            <label for='category'>Categoria</label>
              <select name='category'>
                <option value=''>Selecione uma categoria</option>
                <option value='UX/UI'>UX/UI</option>
                <option value='Testes'>Testes</option>
              </select>
            <label for='members'>Members</label>
              <select name='members'>
                <option value=''>Selecione um membro da equipe</option>
                <option value='name1'>Name1</option>
                <option value='name2'>Name2</option>
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





