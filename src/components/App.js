import Pet from "./Pet";
import Status from "./Status";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Tomogotchi</h1>
      <Pet />
      <Status />
    </div>
  );
};

export default App;
