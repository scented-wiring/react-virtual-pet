import "../styles/Status.css";

const Status = () => {
  return (
    <div class="Status">
      <div class="health">
        Health: <i className="fas fa-heart"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-heart"></i>
      </div>
      <div class="hunger">
        Hunger:<i class="fas fa-hamburger"></i>
        <i class="fas fa-hamburger"></i>
        <i class="fas fa-hamburger"></i>
        <i class="fas fa-hamburger"></i>
        <i class="fas fa-hamburger"></i>
      </div>
    </div>
  );
};

export default Status;
