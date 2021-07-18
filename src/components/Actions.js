import "../styles/Actions.css";

const Actions = ({ health, hunger, setHealth, setHunger }) => {
  return (
    <div className="Actions">
      <button
        disabled={health <= 3 ? false : true}
        onClick={() => setHealth(health + 1)}
      >
        Play
      </button>
      <button
        disabled={hunger <= 3 ? false : true}
        onClick={() => setHunger(hunger + 1)}
      >
        Feed
      </button>
      <button>Clean</button>
    </div>
  );
};

export default Actions;
