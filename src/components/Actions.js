import "../styles/Actions.css";

const Actions = ({ health, hunger, setHealth, setHunger }) => {
  return (
    <div class="Actions">
      <button onClick={() => setHealth(health + 1)}>Play</button>
      <button onClick={() => setHunger(hunger + 1)}> Feed</button>
      <button>Clean</button>
    </div>
  );
};

export default Actions;
