const { gql } = require('apollo-server-lambda');

exports.typeDefs = gql`
    type Joke {
        id: String
        url: String
        value: String
        icon_url: String
        category: String
    }

    type Query {
        """
        A random joke.
        """
        getRandomJoke(category: String!): Joke,
        """
        A list of joke categories.
        """
        getCategories: [String]
    }
`;