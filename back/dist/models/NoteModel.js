"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSheet = exports.Note = void 0;
const mongoose_1 = require("mongoose");
// Schema para as notas individuais
const NoteSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    noteSheetId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "NoteSheet",
        required: true,
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});
// Schema para a folha de anotações
const NoteSheetSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    notes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Note",
        },
    ],
    isDone: {
        type: Boolean,
        required: true,
        default: false,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});
// Model para as notas individuais
const Note = (0, mongoose_1.model)("Note", NoteSchema);
exports.Note = Note;
// Model para a folha de anotações
const NoteSheet = (0, mongoose_1.model)("NoteSheet", NoteSheetSchema);
exports.NoteSheet = NoteSheet;
