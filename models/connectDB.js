const mongoose = require('mongoose')

const connect = async () => {
    const connectionString = "mongodb://mongo:27017/music101"
    await mongoose.connect(connectionString)
        .then(console.log('successfully connected to the DB'))
        .catch((e)=>{
            console.log(e)
        })
}

module.exports = connect