import { schema as mySchema } from '../schema/schema';
//import GraphHTTP from 'express-graphql'; // open my playground
import { ApolloServer } from 'apollo-server-express'
export default new ApolloServer({
    schema: mySchema,
    introspection: true
})

