import { useState } from "react";

import Pet from "./Pet";
import Status from "./Status";
import Actions from "./Actions";

import "../styles/App.css";

const App = () => {
  const [health, setHealth] = useState(2);
  const [hunger, setHunger] = useState(2);

  return (
    <div className="App">
      <h1>Tomogotchi</h1>
      <Pet />
      <Status health={health} hunger={hunger} />
      <Actions
        health={health}
        hunger={hunger}
        setHealth={setHealth}
        setHunger={setHunger}
      />
    </div>
  );
};

export default App;
