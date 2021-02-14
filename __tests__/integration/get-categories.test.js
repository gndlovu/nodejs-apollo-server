const ChucknorrisAPI = require('../../src/datasources/chucknorris');

/**
 * There are mock Launches at the bottom of this file.
 * 1 mock for the RAW API reponse, and another
 * for the shape of the lauch after it would have been
 * transformed by the launch reducer.
 */

const mocks = {
  get: jest.fn(),
};

const ds = new ChucknorrisAPI();
ds.get = mocks.get;

describe('[ChucknorrisAPI.getCategories]', () => {
  it('looks up categories from the api', async () => {
    // if api response is list of raw launches,
    // res should be list of transformed launches
    mocks.get.mockReturnValueOnce([mockCategory]);
    const res = await ds.getCategories();

    expect(res).toEqual([mockCategory]);
    expect(mocks.get).toBeCalledWith('categories');
  });
});

const mockCategory = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];
