"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByIdController = void 0;
const Book_Stores_model_1 = require("../models/Book_Stores_model");
const getBookByIdController = (req, res) => {
    const params = req.params;
    const bookId = params.bookId;
    const bookIdNum = parseInt(bookId);
    const bookById = (0, Book_Stores_model_1.getBooksById)(bookIdNum);
    //todo is found to display it
    res.json({
        message: "Fetched Book by id fetched successfully.",
        data: bookById.data,
    });
};
exports.getBookByIdController = getBookByIdController;
//# sourceMappingURL=getBookByIdController.js.map