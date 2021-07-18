import { useState } from "react";

import Pet from "./Pet";
import Status from "./Status";
import Actions from "./Actions";

import "../styles/App.css";

const App = () => {
  const [state, setState] = useState("Baby");
  const [health, setHealth] = useState(4);
  const [hunger, setHunger] = useState(4);

  if (state === "Baby") {
    health > 0 && setInterval(() => setHealth(health - 1), 10000);
    hunger > 0 && setInterval(() => setHunger(hunger - 1), 4000);
  }

  return (
    <div className="App">
      <h1>Tomogotchi</h1>
      <Pet state={state} />
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
