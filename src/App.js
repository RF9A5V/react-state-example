import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  const [myValue, setMyValue] = useState(0);
  const [currentSetting, setCurrentSetting] = useState("normal");

  function onButtonClick(number) {
    // currentNumber = number;
    setMyValue(number)
  }

  return (
    <div className="App">
      <div>
        { myValue }
      </div>
      <button onClick={() => onButtonClick(1)}>1</button>
      <button onClick={() => onButtonClick(2)}>2</button>
      <button onClick={() => onButtonClick(3)}>3</button>
      <button onClick={() => onButtonClick(4)}>4</button>

      <div>{ currentSetting }</div>
      <button onClick={() => setCurrentSetting("normal")}>Normal</button>
      <button onClick={() => setCurrentSetting("light")}>Light</button>
      <button onClick={() => setCurrentSetting("dark")}>Dark</button>
    </div>
  );
}

export default App;
