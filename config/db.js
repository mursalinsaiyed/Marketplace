let config = require('./config');

const mongoose = require("mongoose");

module.exports = function() {
    mongoose.connect("mongodb+srv://mursalinsaiyed:mursalinsaiyed@cluster0.z6clpav.mongodb.net/DressStore?retryWrites=true&w=majority");
    let mongodb = mongoose.connection;

    mongodb.on("error", console.error.bind(console, "Connection Error:"));
    mongodb.once("open", ()=>{
        console.log("===> Connected to MongoDB.")
    })
    return mongodb
}