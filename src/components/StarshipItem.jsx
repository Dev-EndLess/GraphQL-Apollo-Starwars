import React from 'react'
import { Link } from 'react-router-dom'

function StarshipItem({ name, id }) {

  return (
    <div className='starship'>
      <h1>{name}</h1>
      <Link className='link-detail' to={`/starship/details/${id}`}>Details</Link>
    </div>
  )
}

export default StarshipItem