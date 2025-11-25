"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBooksController = void 0;
const Book_Stores_model_1 = require("../models/Book_Stores_model");
const addBooksController = (req, res) => {
    console.log("Body", req.body);
    // const NewApi: BookApi = req.body;
    const NewBookApi = req.body;
    const booksAdded = (0, Book_Stores_model_1.addBooks)(NewBookApi);
    res.json({
        message: "Book Api's created.",
        Data: booksAdded,
    });
};
exports.addBooksController = addBooksController;
//# sourceMappingURL=addBooksController.js.map