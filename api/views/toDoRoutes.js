const express = require("express");
const router = express.Router();
const todoController = require("../controllers/toDoController");
const { RouterSharp } = require("@mui/icons-material");

router.get("/", todoController.getAllTodos);

router.post("/", todoController.createTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;