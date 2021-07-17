import "../styles/Status.css";

const Status = ({ health, hunger }) => {
  return (
    <div class="Status">
      <div class="health">
        Health:
        {[...Array(health)].map((heart) => {
          return <i className="fas fa-heart"></i>;
        })}
      </div>
      <div class="hunger">
        Hunger:
        {[...Array(hunger)].map((burger) => {
          return <i className="fas fa-hamburger"></i>;
        })}
      </div>
    </div>
  );
};

export default Status;
