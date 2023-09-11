const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

const commentController = require("../controllers/commentController");

const messageController = require("../controllers/messageController");

const portfolioController = require("../controllers/portfolioController");

const productController = require("../controllers/productController");

// Blog Routes
router.get("/blogcreate", blogController.create);
router.get("/blogread", blogController.read);
router.get("/blogupdate", blogController.update);
router.get("/blogdelete", blogController.delete);

// Comment Routes
router.get("/commentcreate", commentController.create);
router.get("/commentread", commentController.read);
router.get("/commentupdate", commentController.update);
router.get("/commentdelete", commentController.delete);

// Message Routes
router.get("/messagecreate", messageController.create);
router.get("/messageread", messageController.read);
router.get("/messageupdate", messageController.update);
router.get("/messagedelete", messageController.delete);

// Portfolio Routes
router.get("/portfoliocreate", portfolioController.create);
router.get("/portfolioread", portfolioController.read);
router.get("/portfolioupdate", portfolioController.update);
router.get("/portfoliodelete", portfolioController.delete);

// Product Routes
router.get("/productcreate", productController.create);
router.get("/productread", productController.read);
router.get("/productupdate", productController.update);
router.get("/productdelete", productController.delete);

module.exports = router;
