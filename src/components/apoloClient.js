import fetch from "node-fetch";
import clientConfig from "../client-config";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';



const client = new ApolloClient({
    link: new HttpLink({
        uri: clientConfig.graphqlUrl,
        fetch: fetch,
      }),
    cache: new InMemoryCache()
 
})


export default client;

