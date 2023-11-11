import { useState } from "react";

function TestUseState() {
  const [value, setValue] = useState(0);
  const [fruit, setFruit] = useState(0);

  const handleAddTwo = () => {
    setValue(value + 2);
  };

  const handleClickFruit = (currentFruit) => {
    setFruit(currentFruit);
  };

  return (
    <div>
      <button onClick={handleAddTwo}>Double Counter</button>
      <h1>Current Value: {value}</h1>
      <hr />
      <button
        onClick={function () {
          handleClickFruit("Maçã");
        }}
      >
        Maçã
      </button>
      <button onClick={() => handleClickFruit("Banana")}>Banana</button>
      <button onClick={() => handleClickFruit("Morango")}>Morango</button>
      {fruit && <h1>Clicked on: {fruit}</h1>}
      {!fruit && <h1>Click on some of the fruits</h1>}
    </div>
  );
}

export default TestUseState;
