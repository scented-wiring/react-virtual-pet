import "../styles/Actions.css";

const Actions = ({ health, hunger, setHealth, setHunger }) => {
  return (
    <div class="Actions">
      <button onClick={() => setHealth(health + 1)}>Play</button>
      <button>Feed</button>
      <button onClick={() => setHunger(hunger + 1)}>Clean</button>
    </div>
  );
};

export default Actions;
