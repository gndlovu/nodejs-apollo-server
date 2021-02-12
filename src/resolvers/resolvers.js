exports.resolvers = {
    Query: {
        getRandomJokeByCategory: async (_, { category }, { dataSources }) => dataSources.chucknorrisAPI.getRandomJokeByCategory(category),
        getCategories: (_, __, { dataSources }) => dataSources.chucknorrisAPI.getCategories()
    }
};