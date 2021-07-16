import Pet from "./Pet";
import Status from "./Status";
import Actions from "./Actions";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Tomogotchi</h1>
      <Pet />
      <Status />
      <Actions />
    </div>
  );
};

export default App;
