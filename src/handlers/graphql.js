const { ApolloServer } = require('apollo-server-lambda');
const ChucknorrisAPI = require('../datasources/chucknorris');

const { resolvers } = require('../resolvers/resolvers');
const { typeDefs } = require('../schema/type-defs');

const apolloServer = new ApolloServer({ 
    resolvers, 
    typeDefs,
    // playground: true,
    // introspection: true,
    dataSources: () => ({ 
        chucknorrisAPI: new ChucknorrisAPI()
    })
});

exports.graphqlHandler = apolloServer.createHandler({
    cors: {
        origin: process.env.CORS_ORIGIN_URL,
        credentials: false,
    }
});