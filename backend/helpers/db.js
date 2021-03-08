const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: true})
    .then(() => console.log("mongodb connection is okay"))
    .catch(e => console.log(e))
}

module.exports = connectDB