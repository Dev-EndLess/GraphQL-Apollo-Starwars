import { useQuery, gql } from "@apollo/client"

const GET_PEOPLE = gql`
query {
  allPeople {
    people {
      id
      name
    }
  }
}
`
export const usePeople = () => {
 const { loading, error, data } = useQuery(GET_PEOPLE)

 return {
  loading,
  error,
  data
 }
}

export default usePeople