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
exports.updateNote = exports.getNoteById = exports.deleteNote = exports.createNote = exports.getNotes = void 0;
const Note_1 = __importDefault(require("../../models/Note"));
/**
 * It gets all the notes from the database and returns them in the response
 * @param {INoteRequestBody} _req - INoteRequestBody - This is the request body that is sent to the
 * server.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
const getNotes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Note_1.default.find((error, data) => {
        if (error) {
            res.status(404).json({ status: 404, message: 'No notes found' });
        }
        res.status(200).json(data);
    });
});
exports.getNotes = getNotes;
/**
 * It creates a new note in the database
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * interface.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = req.body;
    if (!note.author || !note.body)
        res
            .status(400)
            .json({ status: 400, message: 'Invalid note passed as parameter' });
    Note_1.default.create(Object.assign({ id: Date.now() }, note));
    res.status(200).json({
        status: 200,
        message: 'Success'
    });
});
exports.createNote = createNote;
/**
 * It finds a note by its id and deletes it
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - This is the response object that we will use to send back a
 * response to the client.
 */
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Note_1.default.findByIdAndDelete(req.params.id, (error) => {
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
});
exports.deleteNote = deleteNote;
/**
 * It finds a note by its id and returns it
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
const getNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Note_1.default.findById(req.params.id, (error, data) => {
        if (error) {
            res.status(400).json({
                status: 400,
                message: 'Error'
            });
        }
        res.status(200).json(data);
    });
});
exports.getNoteById = getNoteById;
/**
 * It finds a note by its id and updates it with the new data
 * @param {INoteRequestBody} req - INoteRequestBody - This is the request body that we defined in the
 * previous step.
 * @param {Response} res - Response - this is the response object that we will use to send back a
 * response to the client.
 */
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Note_1.default.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            res.status(400).json({
                status: 400,
                message: 'Error'
            });
        }
        res.status(200).json(Object.assign(Object.assign({}, data._doc), req.body));
    });
});
exports.updateNote = updateNote;
//# sourceMappingURL=index.js.map