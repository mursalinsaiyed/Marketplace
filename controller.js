let productmodel = require("./model/product")

module.exports.home = async function(req, res, next){
    res.json({
        success:true,
        message: "Welcome to dress store application"
    })
}