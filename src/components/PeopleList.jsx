import React from 'react'
import PeopleItem from './PeopleItem'
import { usePeople } from './hooks/usePeople'
import { Link } from 'react-router-dom'

function PeopleList() {
  const {loading, error, data } = usePeople()
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error...</div>

  const allPeople = data.allPeople.people.map((person) => (
    <PeopleItem key={person.id} name={person.name} id={person.id} />
  ));

  return (
    <div className="container">
      <h1 className="title">People</h1>
      <span className="back">
      <Link to="/" className="back-to">
        Back to Home
      </Link>
      </span>
      {allPeople}
    </div>
  );
}

export default PeopleList