import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  author: { type: String, default: 'Anonymous' },
  body: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
