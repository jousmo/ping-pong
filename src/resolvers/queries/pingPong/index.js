import { Query, Resolver } from 'type-graphql'

@Resolver()
export class Ping{
  @Query(() => String)
  ping () {
    return 'Pooong!'
  }
}