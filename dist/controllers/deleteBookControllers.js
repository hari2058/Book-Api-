"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookController = void 0;
const Book_Stores_model_1 = require("../models/Book_Stores_model");
const deleteBookController = (req, res) => {
    const params = req.params;
    const bookId = params.bookId;
    const bookIdNum = parseInt(bookId);
    const deletedBooks = (0, Book_Stores_model_1.deleteBooks)(bookIdNum);
    res.json({
        message: "Deleted Book From Books Store",
        Data: deletedBooks,
    });
};
exports.deleteBookController = deleteBookController;
//# sourceMappingURL=deleteBookControllers.js.map