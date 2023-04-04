const express = require('express')
const connect = require('./models/connectDB')
const songRoute = require('./routes/song')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000


app.use(morgan('combined'))
app.use(express.json())
app.use("/api/v1/music101", songRoute)



app.get('/api/v1/music101/ping', (req, res)=> {

    res.status(200).json({
        message:"success",
        status: 200,
        data: "API working fine"
    })
    console.log('API working finesss!')
})

app.listen(PORT, ()=> {
    connect()
    console.log('app running on port '+ PORT)
})

