import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const nominatedListVar = makeVar(["ZmlsbXM6Mg=="]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        hello: {
          read() {
            return ["hello", "world"];
          },
        },
        hola: {
          read() {
            return "hola";
          },
        },
      },
    },
    Film: {
      fields: {
        isNominated: {
          read() {
            return false;
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache,
  connectToDevTools: true,
});
