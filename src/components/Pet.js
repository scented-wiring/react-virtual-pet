import "../styles/Pet.css";

const Pet = ({ state }) => {
  return (
    <div className="Pet">
      <div>{state}</div>
    </div>
  );
};

export default Pet;
