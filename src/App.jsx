import { useState } from "react";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [animals, setAnimals] = useState([
    {
      id: "1155dfvgb555g5b",
      name: "Lion",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, temporibus.",
    },
    {
      id: "1sffvjjffv55g5b",
      name: "Leopard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, temporibus.",
    },
    {
      id: "1155d516515dfbv65b",
      name: "Bear",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, temporibus.",
    },
  ]);

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    const payload = { ...form, id };
    setAnimals([...animals, payload]);
  };

  const deleteAnimal = (id) => {
    const new_animals = animals.filter((animal) => animal.id !== id);
    setAnimals(new_animals);
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-2">
          <div className="card ">
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="Animal name..."
                  className="form-control my-2"
                />
                <textarea
                  name="desc"
                  onChange={handleChange}
                  placeholder="Description"
                  cols="30"
                  rows="10"
                  className="form-control my-2"
                ></textarea>
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success" form="submit">
                Add New Animal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />
        ))}
      </div>
    </div>
  );
};

export default App;
