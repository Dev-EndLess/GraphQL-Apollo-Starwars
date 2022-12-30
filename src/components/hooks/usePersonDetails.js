import { useQuery, gql } from "@apollo/client"

const GET_PERSON = gql`
  query($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      height
      mass
      skinColor
      eyeColor
      hairColor
      homeworld {
        name
      }
    }
  }
  `;

export const usePersonDetails = (id) => {

  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { id }
  })

  return {
    loading,
    error,
    data
  }
}