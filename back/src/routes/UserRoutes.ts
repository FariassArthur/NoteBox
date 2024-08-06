import { Router } from "express";
import { authenticateJWT } from "../middlewares/AuthJWT";
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
router.get("/", takeAllUsers);
router.delete("/:id", authenticateJWT, deleteUser);
router.patch("/:id", authenticateJWT, updateUser);

export default router;
