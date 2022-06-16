'use strict';

import { Request, Response } from 'express';
import { INoteRequestBody } from '../../types';
import { Router } from 'express';
import Note from '../../models/Note';

const notesRouter = Router();

notesRouter
  .route('/notes')
  .get(async (_req: Request, res: Response) => {
    const notes = await Note.find();
    res.json(notes);
  })
  .post(async (req: INoteRequestBody, res: Response) => {
    const note = req.body;

    if (!note.author || !note.body)
      res
        .status(400)
        .json({ status: 400, message: 'Invalid note passed as parameter' });

    Note.create({ id: Date.now(), ...note });

    res.status(200).json({
      status: 200,
      message: 'Success'
    });
  });

notesRouter
  .route('/notes/:id')
  .delete(async (req: INoteRequestBody, res: Response) => {
    const note = await Note.findById(req.params.id);

    if (!note) {
      res.status(400).end();
    }

    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      message: 'Success'
    });
  })
  .get(async (req: INoteRequestBody, res: Response) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    if (!note) {
      res.status(400).end();
    }

    res.status(200).json(note);
  });

export default notesRouter;
