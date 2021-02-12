const { request } = require('../../helpers/axios-wrapper');

exports.resolvers = {
    Query: {
        getRandomJoke: async (_, { category }) => {
            const response = await request(`https://api.chucknorris.io/jokes/random?category=${category}`);
            
            return response.data;
        },
        getCategories: async () => {
            const response = await request('https://api.chucknorris.io/jokes/categories');

            return response.data;
        }
    }
  };