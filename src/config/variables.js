const path = require("path")

// import .env variables
require("dotenv-safer").config({
  allowEmptyValues: true,
  path: path.join(__dirname, "../../.env"),
  example: path.join(__dirname, "../../.env.example"),
})

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  appUri: process.env.APP_URI,
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
}
