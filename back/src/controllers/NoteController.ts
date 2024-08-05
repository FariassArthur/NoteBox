import { Request, Response } from "express";
import mongoose from "mongoose";
import { Note, NoteSheet } from "../models/NoteModel";

export const createNoteSheet = async (req: Request, res: Response) => {
  const { title, notes = [], userId } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const notesheet = new NoteSheet({
      title,
      notes,
      userId,
    });

    await notesheet.save();
    res.status(201).json(notesheet);
  } catch (error) {
    res.status(500).json({ message: "Error creating notesheet", error });
  }
};

export const createNote = async (req: Request, res: Response) => {
  const { text, noteSheetId, isDone } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(noteSheetId)) {
      return res.status(400).json({ message: "Invalid notesheet ID" });
    }

    const note = new Note({
      text,
      noteSheetId,
      isDone,
    });

    const noteSheet = await NoteSheet.findById(noteSheetId);

    if (!noteSheet) {
      return res.status(404).json({ message: "Notesheet not found" });
    }

    noteSheet.notes.push(note._id as mongoose.Types.ObjectId);
    await noteSheet.save();

    res.json(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error });
  }
};

export const updateNote = async (req: Request, res: Response) => {
    
}