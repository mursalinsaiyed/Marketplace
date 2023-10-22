var express = require('express');
var router = express.Router();

let dress = require("../controller/controller")

router.get("/", dress.create);
router.get("/products", dress.getProducts);
router.get("/products/:id", dress.getProduct);
router.post("/products", dress.addProduct);
router.put("/products/:id", dress.updateProduct);
router.delete("/products/:id", dress.removeProduct);
router.delete("/products", dress.removeAllProducts);
router.get("/products", dress.findProductsByNameKW);


/* GET home page. */
//router.get('/', dress.home);

module.exports = router;
