'use strict';var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const Note_1 = __importDefault(require('../../models/Note'));
const notesRouter = (0, express_1.Router)();
notesRouter
  .route('/notes')
  .get((_req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const notes = yield Note_1.default.find();
      res.json(notes);
    })
  )
  .post((req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
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
    })
  );
notesRouter
  .route('/notes/:id')
  .delete((req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const note = yield Note_1.default.findById(req.params.id);
      if (!note) {
        res.status(400).end();
      }
      yield Note_1.default.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 200,
        message: 'Success'
      });
    })
  )
  .get((req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const note = yield Note_1.default.findById(req.params.id);
      if (!note) {
        res.status(400).end();
      }
      res.status(200).json(note);
    })
  );
exports.default = notesRouter;
//# sourceMappingURL=index.js.map
