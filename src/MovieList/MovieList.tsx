import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FILMS = gql`
  query Query {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;

export function MovieList() {
  const { data, loading, error } = useQuery(GET_FILMS);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data.allFilms.films.map((film: { id: number; title: string }) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </div>
  );
}
