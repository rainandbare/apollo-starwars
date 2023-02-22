import React from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Nominees } from "./Nominees";
import { gql, useQuery } from "@apollo/client";

const QUERY_USER_PAGE = gql`
  query UserPage {
    hello
    hola
  }
`;

function App() {
  const { data, loading, error } = useQuery(QUERY_USER_PAGE);
  console.log(data.hello);
  return (
    <div className="App">
      <h1>Our Very Own Star Wars Oscars</h1>
      <Nominees />
      <MovieList />
    </div>
  );
}

export default App;
