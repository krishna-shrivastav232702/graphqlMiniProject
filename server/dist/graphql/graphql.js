import { ApolloServer } from "@apollo/server";
import { graphqlSchema } from "./schema/graphqlSchema.js";
import { resolver } from "./resolvers/index.js";
export const connectGraphql = () => {
    const server = new ApolloServer({
        typeDefs: graphqlSchema,
        resolvers: resolver
    });
    return server;
};
