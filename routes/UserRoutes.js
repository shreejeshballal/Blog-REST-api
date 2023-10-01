import { Router } from 'express';
import { createUser, deleteUser, fetchUsers, showUser, updateUser } from '../controller/UserController.js';
const router = Router();

router.post("/", createUser)
router.post("/:id", updateUser)
router.get("/", fetchUsers)
router.get("/:id", showUser)
router.delete("/:id", deleteUser)

export default router;