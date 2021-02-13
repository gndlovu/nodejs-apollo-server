const { RESTDataSource } = require('apollo-datasource-rest');

/**
 * ChucknorrisAPI class
 */
class ChucknorrisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.CHUCKNORRIS_API_BASE_URL;
    }

    /**
     * Gets Chucknorris joke for the given category.
     * @param {string} category
     * @return {Promise}
     */
    async getRandomJokeByCategory(category) {
        const joke = await this.get('random', { category });

        return joke;
    }

    /**
     * Gets Chucknorris jokes categories
     * 
     * @return {Promise<[]>}
     */
    async getCategories() {
        const categories = await this.get('categories');
        
        return categories;
    }
}
  
  module.exports = ChucknorrisAPI;