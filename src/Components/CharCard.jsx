import { Link } from "react-router-dom";
import "./CharCard.css";
import IndividualCard from "./IndividualCard";

function CharCard({ id, name, imageUrl, species, affiliations }) {
  return (
    <Link to={"/gallery/character:" + name}>
      <IndividualCard
        key={id}
        id={id}
        name={name}
        species={species}
        imageUrl={imageUrl}
        affiliations={affiliations}
      />
    </Link>
  );
}

export default CharCard;
