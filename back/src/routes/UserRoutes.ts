import { Router } from "express";
import {
  createUser,
  deleteUser,
  takeAllUsers,
  takeUser,
  updateUser,
} from "../controllers/UserController";

const router = Router();

router.post("/", createUser);
router.get("/:id", takeUser);
router.get("/all", takeAllUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
