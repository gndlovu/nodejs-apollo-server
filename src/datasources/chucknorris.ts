import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../environment';

/**
 * ChucknorrisAPI class
 */
export class ChucknorrisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = environment.apiBaseUrl;
    }

    /**
     * Gets Chucknorris joke for the given category.
     * @param {string} category
     * @return {Promise}
     */
    async getRandomJokeByCategory(category: string) {
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