const mongoose = require('mongoose');

const connectdb = mongoose.createConnection("mongodb://admin:password@localhost:27017/test?authSource=admin&directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).on("open", () => {
    console.log("MongoDB connected !")
}).on('error', (err) => {
    console.log(err)
})


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// const MonModel = connectdb.model("mon", monmodel)
const UserModel = connectdb.model('employees', userSchema)

module.exports.UserModel = UserModel
// module.exports.MonModel = MonModel
module.exports.connectdb = connectdb