import fetch from "node-fetch";
import { ApolloClient,  InMemoryCache, createHttpLink } from "@apollo/client";
import clientConfig from "../client-config";

const client = new ApolloClient({
  link: createHttpLink({
    uri: clientConfig.graphqlUrl,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

console.log(clientConfig.graphqlUrl)
export default client;