const express = require('express')
const logMiddleware = require("./middleware/log.middleware.js");
const app = express()
const port = 3000

app.use(express.static('dist'))
app.use(logMiddleware);

app.listen(port, () => {
  console.log(`server starts at http://localhost:${port}`)
})