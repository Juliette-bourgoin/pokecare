import { gql, useQuery } from "@apollo/client";

const getAllMoviesQuery = gql`
query GetAllMovies {
  getAllMovies {
    title
    picture
  }
}`

export function useGetAllMovies() {
  const { data, loading, error }= useQuery( getAllMoviesQuery );
  return { data, loading, error };
}