import { Router } from "express";
import { authenticateJWT } from "../middlewares/AuthJWT";
import {
  createNote,
  createNoteSheet,
  updateNote,
} from "../controllers/NoteController";

const router = Router();

router.post("/notesheet", authenticateJWT, createNoteSheet);
router.post("/note", authenticateJWT, createNote);
router.post("/note/update", authenticateJWT, updateNote);

export default router;
