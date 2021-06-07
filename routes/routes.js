const express = require("express");
const router = express.Router();

const getUsers = require("./userRoutes/getUsers");
const addNewUser = require("./userRoutes/addNewUser");
const deleteUser = require("./userRoutes/deleteUser");

router.use("/user", getUsers);
router.use("/user", addNewUser);
router.use("/user", deleteUser);
router.use("/", (req, res, next) => {
  //   console.log(error);

  const status = 500;
  const message = "not found";

  res.status(status).json({ message: message });
});

module.exports = router;
