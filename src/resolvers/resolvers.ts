export const resolvers = {
    Query: {
        getRandomJokeByCategory: async (_: any, { category }: any, { dataSources }: any) => dataSources.chucknorrisAPI.getRandomJokeByCategory(category),
        getCategories: (_: any, __: any, { dataSources }: any) => dataSources.chucknorrisAPI.getCategories()
    }
};