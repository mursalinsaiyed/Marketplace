let productModel = require("../model/product")

module.exports.create = async function(req, res, next){
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
  res.json({ message: 'Product deleted successfully' });
};

// REMOVE ALL PRODUCTS
module.exports.removeAllProducts = async function (req, res, next) {
  try {
      await productModel.deleteMany({});
      res.json({ message: 'All products deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error occurred while deleting products', error: error.message });
  }
};


// FIND PRODUCTS WITH NAME CONTAINING 'kw'
module.exports.findProductsByNameKW = async function(req, res, next) {
  try {
      let keyword = req.query.name; // Fetch the 'name' query parameter
      let products = await productModel.find({
          name: {
              $regex: keyword,  // Use the fetched keyword here
              $options: 'i'
          }
      });
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: 'Error occurred while fetching products', error: error.message });
  }
  console.log("Query Name:", req.query.name);

};

