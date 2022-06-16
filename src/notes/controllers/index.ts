import { Response } from 'express';
import Note from '../../models/Note';
import { INoteRequestBody } from '../../types';

/**
 * It gets all the notes from the database and returns them in the response
 * @param {INoteRequestBody} _req - INoteRequestBody - This is the request body that is sent to the
 * server.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
export const getNotes = async (_req: INoteRequestBody, res: Response) => {
  await Note.find((error, data) => {
    if (error) {
      res.status(404).json({ status: 404, message: 'No notes found' });
    }

    res.status(200).json(data);
  });
};

/**
 * It creates a new note in the database
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * interface.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
export const createNote = async (req: INoteRequestBody, res: Response) => {
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
};

/**
 * It finds a note by its id and deletes it
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - This is the response object that we will use to send back a
 * response to the client.
 */
export const deleteNote = async (req: INoteRequestBody, res: Response) => {
  await Note.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: 'Error'
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Success'
    });
  });
};

/**
 * It finds a note by its id and returns it
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
export const getNoteById = async (req: INoteRequestBody, res: Response) => {
  await Note.findById(req.params.id, (error, data) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: 'Error'
      });
    }

    res.status(200).json(data);
  });
};

/**
 * It finds a note by its id and updates it with the new data
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - this is the response object that we will use to send back a
 * response to the client.
 */
export const updateNote = async (req: INoteRequestBody, res: Response) => {
  await Note.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: 'Error'
      });
    }

    res.status(200).json({ ...data._doc, ...req.body });
  });
};
