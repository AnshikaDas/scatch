const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");

router.get("/", function(req,res) {
    let error = req.flash("error");
    res.render("index", { error });
});
router.get("/shop", isloggedin, async function (req,res) {
   let product = await productModel.find();
    res.render("shop", { product });
});
router.get("/logout",isloggedin, function (req,res) {
    res.render("shop");
});
module.exports = router;