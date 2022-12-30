import { useQuery, gql } from "@apollo/client"

const GET_STARSHIP = gql`
  query($id: ID!) {
      starship(id: $id) {
        name
        id
        model
        starshipClass
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
      }
  }
`;

export const useStarshipDetails = (id) => {

  const { loading, error, data } = useQuery(GET_STARSHIP, {
    variables: { id }
  })

  return {
    loading,
    error,
    data
  }
}
