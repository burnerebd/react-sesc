import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myString = "\nMinha variável"
  console.log(myString)

  return (
    <div>
      <h1>Hello Word</h1>
      <p>Welcome</p>
    </div>
  )
}

export default App
