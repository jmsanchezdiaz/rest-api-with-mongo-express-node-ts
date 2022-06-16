'use strict';

import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote
} from '../controllers';

const notesRouter = Router();

notesRouter.route('/notes').get(getNotes).post(createNote);
notesRouter
  .route('/notes/:id')
  .delete(deleteNote)
  .get(getNoteById)
  .put(updateNote);

export default notesRouter;
