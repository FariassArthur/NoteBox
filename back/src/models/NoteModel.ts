import mongoose, { Document, Schema, model } from "mongoose";

// Interface para as notas individuais
interface NoteAttributes extends Document {
  text: string;
  isDone: boolean;
  noteSheetId: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interface para a folha de anotações
interface NoteSheetAttributes extends Document {
  title: string;
  notes: mongoose.Types.ObjectId[];
  isDone: boolean;
  userId: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema para as notas individuais
const NoteSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    noteSheetId: {
      type: Schema.Types.ObjectId,
      ref: "NoteSheet",
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Schema para a folha de anotações
const NoteSheetSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model para as notas individuais
const Note = model<NoteAttributes>("Note", NoteSchema);

// Model para a folha de anotações
const NoteSheet = model<NoteSheetAttributes>("NoteSheet", NoteSheetSchema);

export { Note, NoteSheet };
