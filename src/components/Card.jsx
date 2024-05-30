const Card = ({ animal, deleteAnimal }) => {
    return (
      <div className="card my-2">
        <div className="card-header">
          <h1>{animal.name}</h1>
        </div>
        <div className="card-body">
          <p>{animal.desc}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={() => deleteAnimal(animal.id)}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  