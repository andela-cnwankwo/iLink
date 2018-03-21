const numberGenerationRoute = require('./numberGeneration');

// Configure routes
const routes = (router) => {
    numberGenerationRoute(router);
};

module.exports = routes;
