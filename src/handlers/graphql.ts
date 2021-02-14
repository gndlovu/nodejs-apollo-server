import { ApolloServer } from 'apollo-server-lambda';
import { ChucknorrisAPI } from '../datasources/chucknorris';

import { resolvers } from '../resolvers/resolvers';
import { typeDefs } from '../schema/type-defs';

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    // playground: true,
    // introspection: true,
    dataSources: () => ({
        chucknorrisAPI: new ChucknorrisAPI()
    })
});

export const graphqlHandler = apolloServer.createHandler({
    /*cors: {
        origin: 'http://localhost:3000',
        credentials: false,
    }*/
});



// import { ApolloServer } from 'apollo-server-lambda';

// import { resolvers } from './resolvers';
// import { typeDefs } from './type-defs';

// const apolloServer = new ApolloServer({ resolvers, typeDefs });

// export const graphqlHandler = apolloServer.createHandler();