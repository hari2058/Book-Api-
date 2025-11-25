"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksApi = void 0;
exports.addBooks = addBooks;
exports.getAllBooks = getAllBooks;
exports.getBooksById = getBooksById;
exports.deleteBooks = deleteBooks;
exports.updateBooks = updateBooks;
exports.BooksApi = [];
function addBooks(BookData) {
    exports.BooksApi.push(BookData);
    return BookData;
}
function getAllBooks() {
    return exports.BooksApi;
}
function getBooksById(bookId) {
    const bookIdx = exports.BooksApi.findIndex((BookApi) => {
        if (BookApi.id === bookId)
            return true;
        else
            return false;
    });
    if (bookIdx === -1) {
        throw new Error(`Book not found by id ${bookIdx}`);
    }
    return {
        Idx: bookIdx,
        data: exports.BooksApi[bookIdx],
    };
}
function deleteBooks(bookId) {
    const booksData = getBooksById(bookId);
    if (!booksData.data) {
        throw new Error(`Books not found by id ${bookId}`);
    }
    const splicedBook = exports.BooksApi.splice(booksData.Idx, 1);
    return splicedBook;
}
function updateBooks(bookId, body) {
    const booksData = getBooksById(bookId);
    if (!booksData.data) {
        throw new Error(`Books not found by id ${bookId}`);
    }
    const updatedBooks = exports.BooksApi.map((BookApi) => {
        if (bookId === BookApi.id) {
            // book found to update
            return {
                ...BookApi,
                ...body,
            };
        }
        else {
            return BookApi;
        }
    });
    exports.BooksApi = updatedBooks;
    return exports.BooksApi;
}
//# sourceMappingURL=Book_Stores_model.js.map