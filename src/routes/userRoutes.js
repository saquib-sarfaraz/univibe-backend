import express from 'express';
import { registerUser, loginUser, getUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;