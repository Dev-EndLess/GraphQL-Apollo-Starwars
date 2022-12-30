import { useQuery, gql } from "@apollo/client"

const GET_STARSHIPS = gql`
  query {
    allStarships {
      starships {
        id
        name
      }
    }
  }
`;

export const useStarships = () => {
  const { loading, error, data } = useQuery(GET_STARSHIPS)

  return {
    loading,
    error,
    data
  }
}

export default useStarships