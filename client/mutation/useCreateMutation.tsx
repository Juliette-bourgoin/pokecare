import { gql, useMutation } from "@apollo/client";

const createMovieMutation = gql`
mutation CreateMovie(
  $category: String!, $title: String!, $year: Int!) {
  createMovie( category: $category, title: $title, year: $year ){
    picture
    id
  }
}`
export function useCreateMovie () {
  const [createMovie, { loading, error, data}] = 
  useMutation(createMovieMutation);

  return {
    createMovie: createMovie,
    loading: loading,
    error,
    data
  }
}