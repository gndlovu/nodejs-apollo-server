exports.resolvers = {
    Query: {
        getRandomJoke: async (_, { category }, { dataSources }) => dataSources.chucknorrisAPI.getRandomJokeByCategory({ category }),
        getCategories: (_, __, { dataSources }) => dataSources.chucknorrisAPI.getCategories()
    }
};