const { ApolloServer } = require('apollo-server-lambda');
const ChucknorrisAPI = require('../datasources/chucknorris');

const { resolvers } = require('../resolvers/resolvers');
const { typeDefs } = require('../schema/type-defs');

const apolloServer = new ApolloServer({ 
    resolvers, 
    typeDefs,
    dataSources: () => ({ 
        chucknorrisAPI: new ChucknorrisAPI()
    })
});

exports.graphqlHandler = apolloServer.createHandler();