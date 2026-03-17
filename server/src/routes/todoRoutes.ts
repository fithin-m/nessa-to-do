import express from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todoController";

const router = express.Router();



router.post("/", createTodo);

router.get("/", getTodos);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;