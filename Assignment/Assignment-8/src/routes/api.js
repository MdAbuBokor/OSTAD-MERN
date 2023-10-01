const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

const postController = require("../controllers/postController");

const subAdminController = require("../controllers/subAdminController");

const userController = require("../controllers/userController");

// admin Routes
router.get("/admincreate", adminController.create);
router.get("/adminread", adminController.read);
router.get("/adminupdate", adminController.update);
router.get("/admindelete", adminController.delete);

// post Routes
router.get("/postcreate", postController.create);
router.get("/postread", postController.read);
router.get("/postupdate", postController.update);
router.get("/postdelete", postController.delete);

// subAdmin Routes
router.get("/subAdmincreate", subAdminController.create);
router.get("/subAdminread", subAdminController.read);
router.get("/subAdminupdate", subAdminController.update);
router.get("/subAdmindelete", subAdminController.delete);

// user Routes
router.get("/usercreate", userController.create);
router.get("/userread", userController.read);
router.get("/userupdate", userController.update);
router.get("/userdelete", userController.delete);

router.get((req, res) => {
  res.status(404).json({ status: "error", subAdmin: "Not Found" });
});

module.exports = router;
