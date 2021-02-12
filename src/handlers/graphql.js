const { ApolloServer } = require('apollo-server-lambda');

const { resolvers } = require('../resolvers/resolvers');
const { typeDefs } = require('../schema/type-defs');

const apolloServer = new ApolloServer({ resolvers, typeDefs });

exports.graphqlHandler = apolloServer.createHandler();