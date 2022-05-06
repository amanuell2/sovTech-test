import { ApolloServer } from "apollo-server";
import { port } from "./config/config";
import { schema } from "./schema";

export const server = new ApolloServer({ schema });

server
  .listen({ port })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
