const express = require("express")

// initializes main router
const apiRoutes = express.Router()

// import routes
const envRoutes = require("./routes/envRoutes.js")
const formValidationRoutes = require("./routes/formValidationRoutes.js")

// sets subroutes of the main api route
apiRoutes.use("/env", envRoutes)
apiRoutes.use("/forms", formValidationRoutes)

module.exports = apiRoutes
