exports.resolvers = {
    Query: {
        testMessage: () => 'Hello World!',
        // toDo - Get joke from https://api.chucknorris.io/jokes/random?category={category}
        getRandomJoke: (_, { category }, context) => {
            return {
                "category": category,
                "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "id" : "HwM6STYDQqaGFCduNqRVkA",
                "url" : "",
                "value" : "Betty Davis has Chuck Norris eyes"
            }
        },
        // toDo - Get joke category list from https://api.chucknorris.io/jokes/categories
        getCategories: () => [
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit"]
    }
  };