import React from "react";
import StarshipItem from "./StarshipItem";
import { Link } from "react-router-dom";
import { useStarships } from "./hooks/useStarships";

function StarshipList() {
  const { loading, error, data } = useStarships()
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const allStarship = data.allStarships.starships.map((starship) => (
    <StarshipItem key={starship.id} name={starship.name} id={starship.id} />
  ));

  return (
    <div className="container">
      <h1 className="title">Starships</h1>
      <span className="back">
      <Link to="/" className="back-to">
        Back to Home
      </Link>
      </span>
      {allStarship}
    </div>
  );
}

export default StarshipList;
