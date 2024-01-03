function IndividualCard({ id, name, imageUrl, species, affiliations }) {
  return (
    <div className="card-with-info" id={id}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>
        Character affiliations :
        {affiliations.map((e) => {
          return <p>{e}</p>;
        })}
      </p>
    </div>
  );
}
export default IndividualCard;
