 const express = require("express");
 const router = express.Router();

 const { getallprod1 , getallprod2} = require("../controller/product");

 router.route("/").get(getallprod1);
 router.route("/testing").get(getallprod2);

 module.exports = router;