import { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const { characters, setCharacters } = useState([]);
  useEffect(() => {
    fetch(
      "https://github.com/Miadil/starwars-api/blob/master/api/cardGames.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return;
  <>
    {characters.map((character) => {
      {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        );
      }
    })}
    <div>Gallery</div>;
  </>;
}

export default Gallery;
