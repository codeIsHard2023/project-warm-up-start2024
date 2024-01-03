import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Gallery.css";
import CharCard from "../Components/CharCard";

function Gallery() {
  //get info from API
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/cardGames.json")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  return (
    <>
      <div className="gallery-container">
        {characters.map((character) => {
          return (
            <CharCard
              className="gallery-card"
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              imageUrl={character.image}
              affiliations={character.affiliations}
            ></CharCard>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
