import { ApolloServer } from "@apollo/server";
import { graphqlSchema } from "./schema/graphqlSchema.js";
import { graphQLResolver } from "./resolvers/resolver.js";
export const connectGraphql = () => {
    const server = new ApolloServer({
        typeDefs: graphqlSchema,
        resolvers: graphQLResolver
    });
    return server;
};
