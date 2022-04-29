const express = require('express')
const notes = require("./config/notes")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",notes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})