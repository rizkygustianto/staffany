const { json } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')
const cors = require('cors')

app.use(json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/', route)

app.listen(port, () => {
    console.log(`StaffAny app listening at http://localhost:${port}`)
})