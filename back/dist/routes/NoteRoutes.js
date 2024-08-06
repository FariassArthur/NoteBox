"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NoteController_1 = require("../controllers/NoteController");
const router = (0, express_1.Router)();
router.post("/notesheet", NoteController_1.createNoteSheet);
router.post("/note", NoteController_1.createNote);
router.post("/note/update", NoteController_1.updateNote);
exports.default = router;
