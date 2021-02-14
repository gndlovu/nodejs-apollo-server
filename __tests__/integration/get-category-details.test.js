const ChucknorrisAPI = require('../../src/datasources/chucknorris');


const { resolvers } = require('../../src/resolvers/resolvers');
const { typeDefs } = require('../../src/schema/type-defs');

/**
 * There are mock Launches at the bottom of this file.
 */

const mocks = {
  get: jest.fn(),
};

const ds = new ChucknorrisAPI();
ds.get = mocks.get;

describe('[ChucknorrisAPI.getRandomJokeByCategory]', () => {
  it('should look up a random joke by category from the api', async () => {
    // if api response is list of raw launches,
    // res should be single transformed launch
    mocks.get.mockReturnValueOnce(mockJoke);
    const res = await ds.getRandomJokeByCategory('test');
    
    expect(res).toEqual(mockJoke);
  });
});

const mockJoke = {
    "categories":["animal"],
    "created_at":"2020-01-05 13:42:26.194739",
    "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id":"occQrjPgT8q2mrI8da9Bzw",
    "updated_at":"2020-01-05 13:42:26.194739",
    "url":"https://api.chucknorris.io/jokes/occQrjPgT8q2mrI8da9Bzw",
    "value":"Chuck Norris once had a horse throat so he went to his personal physician. They both thought it tasted like shrimp scampi."
};