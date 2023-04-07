import React, { useEffect, useState } from "react";
import FloatingButton from "./components/UI/FloatingButton";

const About = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?`);
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="aboutContainer">
      <FloatingButton handleLogout={() => {}} />
      {pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <p><img src={pet.images[0]} alt={`${pet.name} image`} /></p>
          <p>{pet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
