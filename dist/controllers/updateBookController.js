"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookController = void 0;
const Book_Stores_model_1 = require("../models/Book_Stores_model");
const updateBookController = (req, res) => {
    const body = req.body;
    const params = req.params;
    const bookId = parseInt(params.bookId);
    const updatedBooks = (0, Book_Stores_model_1.updateBooks)(bookId, body);
    res.json({
        message: "Books Store updated.",
        data: updatedBooks,
    });
};
exports.updateBookController = updateBookController;
//# sourceMappingURL=updateBookController.js.map