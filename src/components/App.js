import { useState } from "react";

import Pet from "./Pet";
import Status from "./Status";
import Actions from "./Actions";

import "../styles/App.css";

const App = () => {
  const [health, Play] = useState([1, 1]);
  const [hunger, Feed] = useState([1, 1]);

  return (
    <div className="App">
      <h1>Tomogotchi</h1>
      <Pet />
      <Status health={health} hunger={hunger} />
      <Actions />
    </div>
  );
};

export default App;
