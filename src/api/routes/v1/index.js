const express = require("express")

const router = express.Router()

const homeController = require("../../controllers/home.controller")

/**
 * GET v1/hello
 */
router.get("/hello", homeController.hello)

module.exports = router
