"use strict";
/*

Create rest api for a book store:
create a book
get all books by author, by genre
get a book by id
delete a book
update a book

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addBooksController_1 = require("./controllers/addBooksController");
const getBookByIdController_1 = require("./controllers/getBookByIdController");
const deleteBookControllers_1 = require("./controllers/deleteBookControllers");
const updateBookController_1 = require("./controllers/updateBookController");
const getAllBooksController_1 = require("./controllers/getAllBooksController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Create book api route
app.post("/bookapi", addBooksController_1.addBooksController);
//Get all book information from book api also filter using author and genre
app.get("/bookapi", getAllBooksController_1.getAllBooksController);
//Get book information by id from book api stores
app.get("/bookapi/:bookId", getBookByIdController_1.getBookByIdController);
/*

mathi ko ma findindex na gare rw direct arko method le pani find garna milxa
id find gare rw direct id ko object lai call garni

const book = BooksApi.find((BookApi) => {
    if (bookId === BookApi.id) return true;
    else return false;
  });

  if (!book === -1) {
    //Book is not found

    res.status(404).json({
      message: `Book not found by Id ${bookId}`,
    });
    return;


  }

  //todo is found to display it
  res.json({
    message: "Fetched Book by id.",
    data: book,
  });

*/
app.delete("/bookapi/:bookId", deleteBookControllers_1.deleteBookController);
// update books stores
app.put("/bookapi/:bookId", updateBookController_1.updateBookController);
app.listen(5000, () => {
    console.log("Listening on http://localhost:5000 ");
});
//# sourceMappingURL=main.js.map