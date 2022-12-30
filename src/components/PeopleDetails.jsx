import React from 'react'
import { Link } from 'react-router-dom'
import { usePersonDetails } from './hooks/usePersonDetails'
import { useParams } from 'react-router-dom'

function PeopleDetails() {
  let { id } = useParams()

  const { loading, error, data } = usePersonDetails(id)

  if(loading) return <div>Loading...</div> 
  if(error) return <div>Error...</div>
  console.log(data.person.name)

  return (
    <div className="list-detail">
      <h2 className="starship-detail">Character: {data.person.name} </h2>
      <p className="item-detail">Age: {data.person.birthYear} <span className='age-details'>BBY - Before the Battle of Yavin | | ABY - After the Battle of Yavin.</span></p>
      <p className="item-detail">
        Gender: {data.person.gender}
      </p>
      <p className="item-detail">
        Mass: {data.person.mass} kg
      </p>
      <p className="item-detail">Height: {data.person.height} cm </p>
      <p className="item-detail">Skin Color: {data.person.skinColor}</p>
      <p className="item-detail">Eye Color: {data.person.eyeColor}</p>
      <p className="item-detail">
        Hair Color: {data.person.hairColor} 
      </p>
      <p className="item-detail">
        Homeworld: {data.person.homeworld.name}
      </p>
      <span className="back">
      <Link to="/people" className="back-to">
        Back to People
      </Link>
      <Link to="/" className="back-to">
        Back to Home
      </Link>
      </span>
    </div>
  );
}

export default PeopleDetails