/*  

Create rest api for a book store:
create a book
get all books by author, by genre
get a book by id
delete a book
update a book

 */

import express from "express";
import { BookApi, BooksApi } from "./models/Book_Stores_model";
import { addBooksController } from "./controllers/addBooksController";
import { getBookByIdController } from "./controllers/getBookByIdController";
import { deleteBookController } from "./controllers/deleteBookControllers";
import { updateBookController } from "./controllers/updateBookController";
import { getAllBooksController } from "./controllers/getAllBooksController";

const app = express();

app.use(express.json());

//Create book api route
app.post("/bookapi", addBooksController);

//Get all book information from book api also filter using author and genre
app.get("/bookapi", getAllBooksController);

//Get book information by id from book api stores
app.get("/bookapi/:bookId", getBookByIdController);

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

app.delete("/bookapi/:bookId", deleteBookController);

// update books stores
app.put("/bookapi/:bookId", updateBookController);

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000 ");
});
