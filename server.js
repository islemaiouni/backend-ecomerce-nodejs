

const express = require('express')
const user = require('./routers/user')
const item = require('./routers/item')
const cart = require('./routers/cart')
require('./db/mongoose')

const port =3000;

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(cartRouter)


app.listen(port, ()=>{  console.log('listening on port ' + port) }) // listen on port 'localhost
