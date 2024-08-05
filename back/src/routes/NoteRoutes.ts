import { Router } from "express";
import {
  createNote,
  createNoteSheet,
  updateNote,
} from "../controllers/NoteController";

const router = Router();

router.post("/notesheet", createNoteSheet);
router.post("/note", createNote);
router.post("/note/update", updateNote);

export default router;
