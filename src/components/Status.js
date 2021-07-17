import "../styles/Status.css";

const Status = ({ health, hunger }) => {
  return (
    <div class="Status">
      <div class="health">
        Health:
        {health.map((heart) => {
          return <i class="fas fa-heart"></i>;
        })}
      </div>
      <div class="hunger">
        Hunger:
        {hunger.map((burger) => {
          return <i class="fas fa-hamburger"></i>;
        })}
      </div>
    </div>
  );
};

export default Status;
