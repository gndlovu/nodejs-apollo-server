const { gql } = require('apollo-server-lambda');

exports.typeDefs = gql`
    type Joke {
        id: String
        url: String
        value: String
        icon_url: String
        created_at: String
        updated_at: String
        categories: [String]
    }

    type Query {
        """
        A random joke by category.
        """
        getRandomJokeByCategory(category: String!): Joke,
        """
        A list of joke categories.
        """
        getCategories: [String]
    }
`;