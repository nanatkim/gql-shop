import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers"; // add this
import { buildSchema } from "type-graphql";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started at port 4000!");
}

main();
