import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.schema.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router()

router.get('/tasks', authRequire, getTasks)
router.get('/tasks/:id', authRequire, getTask)
router.post('/tasks', authRequire, validateSchema(createTaskSchema), createTask)
router.put('/tasks/:id', authRequire, updateTask)
router.delete('/tasks/:id', authRequire, deleteTask)

export default router