'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const notesRouter = (0, express_1.Router)();
notesRouter.route('/notes').get(controllers_1.getNotes).post(controllers_1.createNote);
notesRouter
    .route('/notes/:id')
    .delete(controllers_1.deleteNote)
    .get(controllers_1.getNoteById)
    .put(controllers_1.updateNote);
exports.default = notesRouter;
//# sourceMappingURL=index.js.map