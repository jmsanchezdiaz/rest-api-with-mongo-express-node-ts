"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
    author: { type: String, default: 'Anonymous' },
    body: { type: String, required: true },
    isActive: { type: Boolean, default: true }
});
const Note = mongoose_1.default.model('Note', noteSchema);
exports.default = Note;
//# sourceMappingURL=Note.js.map