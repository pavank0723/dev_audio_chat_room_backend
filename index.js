const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const { APP_PORT, DB_URL } = require('./config')

const app = express()

//📌Note: By default JSON in Express JS --==> ❎disable 
app.use(express.json()) //✅ Enable


//#region 🔗DB Connection 
mongoose.connect(DB_URL)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('DB connected...')
})
//#endregion


//Router setup
app.use('/api',router)

const port  = APP_PORT || 6000
app.listen(port,() => console.log(`Listining on port ${port}`))