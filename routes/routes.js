const express = require("express");
const router = express.Router();

const getUsers = require("./userRoutes/getUsers");
const addNewUser = require("./userRoutes/addNewUser");
const userController = require("../controllers/userController");

router.use("/user", getUsers);
router.use("/user", addNewUser);
router.delete("/user", userController.delete);
router.use("/", (req, res, next) => {
  //   console.log(error);
  
  const status = 500;
  const message = "not found";

  res.status(status).json({ message: message });
});

module.exports = router;
