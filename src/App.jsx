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

  const myArray = ["Fruta 1",
                   "Fruta 2",
                   "Fruta 3"];

  myArray.map((fruits) => {
    return console.log(fruits)
  });

  const myArrayObjects = [
    {id: 1,
     name: "José",
     age: 15
    },
    {id: 2,
      name: "Maria",
      age: 43
     },
     {id: 3,
      name: "Joao",
      age: 19
     },
  ];

myArrayObjects.map((person) => {
  return console.log(`${person.name} tem ${person.age}`)
})

export default App
