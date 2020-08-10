require("dotenv").config()
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import * as resolvers from "./resolvers"

async function main () {
  const PORT = process.env.PORT_APP

  const schema = await buildSchema({
    resolvers: Object.values(resolvers),
  }).catch(e => console.err(e))

  const server = new ApolloServer({ schema })
  await server.listen({ port: PORT }, () =>
    console.log(`Server is running on port ${PORT}`)
  )
}

main()