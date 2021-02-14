(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datasources/chucknorris.ts":
/*!****************************************!*\
  !*** ./src/datasources/chucknorris.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChucknorrisAPI = void 0;
const apollo_datasource_rest_1 = __webpack_require__(/*! apollo-datasource-rest */ "apollo-datasource-rest");
const environment_1 = __webpack_require__(/*! ../environment */ "./src/environment.ts");
class ChucknorrisAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = environment_1.environment.apiBaseUrl;
    }
    getRandomJokeByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const joke = yield this.get('random', { category });
            return joke;
        });
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.get('categories');
            return categories;
        });
    }
}
exports.ChucknorrisAPI = ChucknorrisAPI;


/***/ }),

/***/ "./src/environment.ts":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    apiBaseUrl: process.env.CHUCKNORRIS_API_BASE_URL,
};


/***/ }),

/***/ "./src/handlers/graphql.ts":
/*!*********************************!*\
  !*** ./src/handlers/graphql.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.graphqlHandler = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
const chucknorris_1 = __webpack_require__(/*! ../datasources/chucknorris */ "./src/datasources/chucknorris.ts");
const resolvers_1 = __webpack_require__(/*! ../resolvers/resolvers */ "./src/resolvers/resolvers.ts");
const type_defs_1 = __webpack_require__(/*! ../schema/type-defs */ "./src/schema/type-defs.ts");
const apolloServer = new apollo_server_lambda_1.ApolloServer({
    resolvers: resolvers_1.resolvers,
    typeDefs: type_defs_1.typeDefs,
    dataSources: () => ({
        chucknorrisAPI: new chucknorris_1.ChucknorrisAPI()
    })
});
exports.graphqlHandler = apolloServer.createHandler({});


/***/ }),

/***/ "./src/resolvers/resolvers.ts":
/*!************************************!*\
  !*** ./src/resolvers/resolvers.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        getRandomJokeByCategory: (_, { category }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () { return dataSources.chucknorrisAPI.getRandomJokeByCategory(category); }),
        getCategories: (_, __, { dataSources }) => dataSources.chucknorrisAPI.getCategories()
    }
};


/***/ }),

/***/ "./src/schema/type-defs.ts":
/*!*********************************!*\
  !*** ./src/schema/type-defs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeDefs = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.typeDefs = apollo_server_lambda_1.gql `
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


/***/ }),

/***/ "apollo-datasource-rest":
/*!*****************************************!*\
  !*** external "apollo-datasource-rest" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("apollo-datasource-rest");;

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-lambda");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/handlers/graphql.ts");
/******/ })()

));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2hhbmRsZXJzL2dyYXBocWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcG9sbG8tc2VydmVybGVzcy1sYW1iZGEvLi9zcmMvZGF0YXNvdXJjZXMvY2h1Y2tub3JyaXMudHMiLCJ3ZWJwYWNrOi8vYXBvbGxvLXNlcnZlcmxlc3MtbGFtYmRhLy4vc3JjL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovL2Fwb2xsby1zZXJ2ZXJsZXNzLWxhbWJkYS8uL3NyYy9oYW5kbGVycy9ncmFwaHFsLnRzIiwid2VicGFjazovL2Fwb2xsby1zZXJ2ZXJsZXNzLWxhbWJkYS8uL3NyYy9yZXNvbHZlcnMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL2Fwb2xsby1zZXJ2ZXJsZXNzLWxhbWJkYS8uL3NyYy9zY2hlbWEvdHlwZS1kZWZzLnRzIiwid2VicGFjazovL2Fwb2xsby1zZXJ2ZXJsZXNzLWxhbWJkYS9leHRlcm5hbCBcImFwb2xsby1kYXRhc291cmNlLXJlc3RcIiIsIndlYnBhY2s6Ly9hcG9sbG8tc2VydmVybGVzcy1sYW1iZGEvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiIiwid2VicGFjazovL2Fwb2xsby1zZXJ2ZXJsZXNzLWxhbWJkYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcG9sbG8tc2VydmVybGVzcy1sYW1iZGEvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFU1REYXRhU291cmNlIH0gZnJvbSAnYXBvbGxvLWRhdGFzb3VyY2UtcmVzdCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuLyoqXG4gKiBDaHVja25vcnJpc0FQSSBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgQ2h1Y2tub3JyaXNBUEkgZXh0ZW5kcyBSRVNURGF0YVNvdXJjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IGVudmlyb25tZW50LmFwaUJhc2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBDaHVja25vcnJpcyBqb2tlIGZvciB0aGUgZ2l2ZW4gY2F0ZWdvcnkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5XG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRSYW5kb21Kb2tlQnlDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGpva2UgPSBhd2FpdCB0aGlzLmdldCgncmFuZG9tJywgeyBjYXRlZ29yeSB9KTtcblxuICAgICAgICByZXR1cm4gam9rZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIENodWNrbm9ycmlzIGpva2VzIGNhdGVnb3JpZXNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFtdPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDYXRlZ29yaWVzKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgdGhpcy5nZXQoJ2NhdGVnb3JpZXMnKTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgICB9XG59IiwidHlwZSBFbnZpcm9ubWVudCA9IHtcbiAgICBhcGlCYXNlVXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xuICAgIGFwaUJhc2VVcmw6IHByb2Nlc3MuZW52LkNIVUNLTk9SUklTX0FQSV9CQVNFX1VSTCBhcyBzdHJpbmcsXG59OyIsImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB7IENodWNrbm9ycmlzQVBJIH0gZnJvbSAnLi4vZGF0YXNvdXJjZXMvY2h1Y2tub3JyaXMnO1xuXG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuLi9yZXNvbHZlcnMvcmVzb2x2ZXJzJztcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi4vc2NoZW1hL3R5cGUtZGVmcyc7XG5cbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHJlc29sdmVycyxcbiAgICB0eXBlRGVmcyxcbiAgICAvLyBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIC8vIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgZGF0YVNvdXJjZXM6ICgpID0+ICh7XG4gICAgICAgIGNodWNrbm9ycmlzQVBJOiBuZXcgQ2h1Y2tub3JyaXNBUEkoKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxIYW5kbGVyID0gYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xuICAgIC8qY29yczoge1xuICAgICAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgICAgICBjcmVkZW50aWFsczogZmFsc2UsXG4gICAgfSovXG59KTtcblxuXG5cbi8vIGltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcblxuLy8gaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMnO1xuLy8gaW1wb3J0IHsgdHlwZURlZnMgfSBmcm9tICcuL3R5cGUtZGVmcyc7XG5cbi8vIGNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyByZXNvbHZlcnMsIHR5cGVEZWZzIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgZ3JhcGhxbEhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcigpOyIsImV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgZ2V0UmFuZG9tSm9rZUJ5Q2F0ZWdvcnk6IGFzeW5jIChfOiBhbnksIHsgY2F0ZWdvcnkgfTogYW55LCB7IGRhdGFTb3VyY2VzIH06IGFueSkgPT4gZGF0YVNvdXJjZXMuY2h1Y2tub3JyaXNBUEkuZ2V0UmFuZG9tSm9rZUJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpLFxuICAgICAgICBnZXRDYXRlZ29yaWVzOiAoXzogYW55LCBfXzogYW55LCB7IGRhdGFTb3VyY2VzIH06IGFueSkgPT4gZGF0YVNvdXJjZXMuY2h1Y2tub3JyaXNBUEkuZ2V0Q2F0ZWdvcmllcygpXG4gICAgfVxufTsiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgICB0eXBlIEpva2Uge1xuICAgICAgICBpZDogU3RyaW5nXG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgICAgIHZhbHVlOiBTdHJpbmdcbiAgICAgICAgaWNvbl91cmw6IFN0cmluZ1xuICAgICAgICBjcmVhdGVkX2F0OiBTdHJpbmdcbiAgICAgICAgdXBkYXRlZF9hdDogU3RyaW5nXG4gICAgICAgIGNhdGVnb3JpZXM6IFtTdHJpbmddXG4gICAgfVxuXG4gICAgdHlwZSBRdWVyeSB7XG4gICAgICAgIFwiXCJcIlxuICAgICAgICBBIHJhbmRvbSBqb2tlIGJ5IGNhdGVnb3J5LlxuICAgICAgICBcIlwiXCJcbiAgICAgICAgZ2V0UmFuZG9tSm9rZUJ5Q2F0ZWdvcnkoY2F0ZWdvcnk6IFN0cmluZyEpOiBKb2tlLFxuICAgICAgICBcIlwiXCJcbiAgICAgICAgQSBsaXN0IG9mIGpva2UgY2F0ZWdvcmllcy5cbiAgICAgICAgXCJcIlwiXG4gICAgICAgIGdldENhdGVnb3JpZXM6IFtTdHJpbmddXG4gICAgfVxuYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tZGF0YXNvdXJjZS1yZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hhbmRsZXJzL2dyYXBocWwudHNcIik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQU9BOztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUEzQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7OztBQ1BBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUN6QkE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==