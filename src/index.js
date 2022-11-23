const { port, env, appUri } = require("./config/variables")
const logger = require("./config/logger")
const app = require("./config/express")

// listen to requests
app.listen(port, () => logger.info(`server started on ${appUri}v1 (${env})`))

/**
 * Exports express
 * @public
 */
module.exports = app
