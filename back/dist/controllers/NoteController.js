"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.createNote = exports.createNoteSheet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NoteModel_1 = require("../models/NoteModel");
const createNoteSheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, notes = [], userId } = req.body;
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const notesheet = new NoteModel_1.NoteSheet({
            title,
            notes,
            userId,
        });
        yield notesheet.save();
        res.status(201).json(notesheet);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating notesheet", error });
    }
});
exports.createNoteSheet = createNoteSheet;
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, noteSheetId, isDone } = req.body;
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(noteSheetId)) {
            return res.status(400).json({ message: "Invalid notesheet ID" });
        }
        const note = new NoteModel_1.Note({
            text,
            noteSheetId,
            isDone,
        });
        const noteSheet = yield NoteModel_1.NoteSheet.findById(noteSheetId);
        if (!noteSheet) {
            return res.status(404).json({ message: "Notesheet not found" });
        }
        noteSheet.notes.push(note._id);
        yield noteSheet.save();
        res.json(201).json(note);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
});
exports.createNote = createNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateNote = updateNote;
