"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooksController = void 0;
const Book_Stores_model_1 = require("../models/Book_Stores_model");
const getAllBooksController = (req, res) => {
    const { Author, Genre } = req.query;
    const query = req.query;
    const authorName = Author;
    const genreName = Genre;
    const BooksData = (0, Book_Stores_model_1.getAllBooks)();
    if (!query.Author && !query.Genre) {
        return res.json({
            message: "Books Information Fetched",
            data: BooksData,
        });
    }
    let authorResult = [];
    let genreResult = [];
    if (Author) {
        const author = BooksData.filter((BookApi) => {
            if (authorName === BookApi.Author)
                return true;
            else
                return false;
        });
        if (author.length === 0) {
            return res.status(404).json({
                message: `Match not found for author '${Author}'.`,
            });
        }
        authorResult = author;
    }
    if (Genre) {
        const genre = BooksData.filter((BookApi) => {
            if (genreName === BookApi.Genre)
                return true;
            else
                return false;
        });
        if (genre.length === 0) {
            return res.status(404).json({
                message: `Match not found for genre '${Genre}'.`,
            });
        }
        genreResult = genre;
    }
    res.json({
        message: `Book Fetched`,
        authorData: Author ? authorResult : undefined,
        genreData: Genre ? genreResult : undefined,
    });
    return;
    //  res.json({
    //     message: "All books data fetched.",
    //     data: BooksData,
    //   });
};
exports.getAllBooksController = getAllBooksController;
//# sourceMappingURL=getAllBooksController.js.map