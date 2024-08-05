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
    
}
