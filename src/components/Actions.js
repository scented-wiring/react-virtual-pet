import "../styles/Actions.css";

const Actions = ({ health, hunger, setHealth, setHunger }) => {
  return (
    <div class="Actions">
      <button onClick={() => health <= 3 && setHealth(health + 1)}>Play</button>
      <button onClick={() => hunger <= 3 && setHunger(hunger + 1)}>Feed</button>
      <button>Clean</button>
    </div>
  );
};

export default Actions;
