import React from "react";
import { Link } from "react-router-dom";
import { useStarshipDetails } from "./hooks/useStarshipDetails";
import { useParams } from "react-router-dom"; 

function StarshipItem() {
  let { id } = useParams();

  const { loading, error, data } = useStarshipDetails(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="list-detail">
      <h2 className="starship-detail">{data.starship.name} Details</h2>
      <p className="item-detail">Model: {data.starship.model}</p>
      <p className="item-detail">
        Starship Class: {data.starship.starshipClass}{" "}
      </p>
      <p className="item-detail">
        Max Atmosphering Speed: {data.starship.maxAtmospheringSpeed}
      </p>
      <p className="item-detail">Starship Length: {data.starship.length} Meters</p>
      <p className="item-detail">Crew: {data.starship.crew}</p>
      <p className="item-detail">Passengers: {data.starship.passengers}</p>
      <p className="item-detail">
        Cargo Capacity: {data.starship.cargoCapacity} Kg
      </p>
      <p className="item-detail">
        Cost in Credits: {data.starship.costInCredits}{" "}
      </p>
      <span className="back">
      <Link to="/starship" className="back-to">
        Back to Starships
      </Link>
      <Link to="/" className="back-to">
        Back to Home
      </Link>
      </span>
    </div>
  );
}

export default StarshipItem;
