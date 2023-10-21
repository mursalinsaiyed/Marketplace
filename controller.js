let productModel = require("./model/product")

module.exports.home = async function(req, res, next){
    res.json({
        success:true,
        message: "Welcome to dress store application"
    })
}

//GET ALL PRODUCTS
module.exports.getProducts = async function (req, res, next) {
    let products = await productModel.find();
    res.json(products);
    
};

//GET PRODUCT BY ID
module.exports.getProduct = async function (req, res, next) {
    let id = req.params.id;
    let product = await productModel.findById(id);
    res.json(product);

};


//ADD PRODUCT
module.exports.addProduct = async function (req, res, next) {
  let data = await productModel.create(req.body);
  res.json(data);
};

//UPDATE PRODUCT
module.exports.updateProduct = async function (req, res, next) {
  let id = req.params.id;
  let product = new productModel(req.body);
  product._id = id;
  let data = await productModel.findByIdAndUpdate(id, product);
  res.json(data);
};

//REMOVE PRODUCT
module.exports.removeProduct = async function (req, res, next) {
  let id = req.params.id;
  let data = await productModel.findByIdAndDelete(id);
  res.json(data);
};