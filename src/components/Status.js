import "../styles/Status.css";

const Status = ({ health, hunger }) => {
  return (
    <div class="Status">
      <div class="health">
        Health:
        {[...Array(health)].map((heart) => {
          return <i className="fas fa-heart"></i>;
        })}
        {[...Array(4 - health)].map((heart) => {
          return <i className="far fa-heart"></i>;
        })}
      </div>
      <div class="hunger">
        Hunger:
        {[...Array(hunger)].map((burger) => {
          return <i className="fas fa-lemon"></i>;
        })}
        {[...Array(4 - hunger)].map((burger) => {
          return <i className="far fa-lemon"></i>;
        })}
      </div>
    </div>
  );
};

export default Status;
