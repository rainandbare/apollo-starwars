import React from "react";
import { gql } from "@apollo/client";

import { nominatedListVar } from "../client";

export const Nominees = () => {
  return (
    <div>
      <h2>Best Picture Nominees</h2>
      <ul>
        {nominatedListVar().map((filmId: string) => (
          <li key={filmId}>{filmId}</li>
        ))}
      </ul>
    </div>
  );
};
