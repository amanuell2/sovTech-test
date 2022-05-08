import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { port } from "./config/config";
import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

server
  .listen({ port })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
