module.exports = {
    "Api": require('./Api'),
    "WebHooks": require('./Hooks'),
    "Listeners": {
        "NotFound": require('./Listeners/').notFound,
        "Error": require('./Listeners').error
    }
}