const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');


const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userHandlers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES

// GET /users
router.get("/", getAllUsers);

// GET /users/:userId
router.get("/:userId", getUserById);

router.use(auth);

// POST /users
router.post("/", createUser);

// PUT /users/:userId
router.put("/:userId", updateUser);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

module.exports = router;