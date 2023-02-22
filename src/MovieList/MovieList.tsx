import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FILMS = gql`
  query Query {
    allFilms {
      films {
        title
        id
        isNominated @client
      }
    }
  }
`;

export function MovieList() {
  const { data, loading, error } = useQuery(GET_FILMS);
  // console.log(data?.allFilms.films);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data.allFilms.films.map(
        (film: { id: string; title: string; isNominated: boolean }) => (
          <li key={film.id}>
            <label htmlFor={film.id}>{film.title}</label>
            <input type="checkbox" name={film.title} id={film.id} />
            {film.isNominated ? "Nominated" : "Not Nominated"}
          </li>
        ),
      )}
    </div>
  );
}
