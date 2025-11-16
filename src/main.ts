/*  

Create rest api for a book store:
create a book
get all books by author, by genre
get a book by id
delete a book
update a book

 */

import express from "express";

interface BookApi {
  id: number;
  Title: string;
  Author: string;
  Genre: string;
  Status: "COMPLETED" | "ONGOING" | "DROPPED";
  Date: number;
}
// const body: BookApi = [];

const BooksApi: BookApi[] = [];
const app = express();

app.use(express.json());

//Create book api route
app.post("/bookapi", (req, res) => {
  console.log("Body", req.body);

  // const NewApi: BookApi = req.body;

  const NewBookApi: BookApi = req.body;

  BooksApi.push(NewBookApi);

  res.json({
    message: "Book Api's created.",
    Data: NewBookApi,
  });
});

//Get all book information from book api also filter using author and genre
app.get("/bookapi", (req, res) => {
  const { Author, Genre } = req.query;
  const query = req.query;
  console.log("Query Received", query);

  const authorName = Author;
  const genreName = Genre;

  let result = BooksApi;

  if (!query.Author && !query.Genre) {
    return res.json({
      message: "Books Information Fetched",
      data: BooksApi,
    });
  }

  let authorResult: BookApi[] = [];
  let genreResult: BookApi[] = [];

  if (Author) {
    const author = BooksApi.filter((BookApi) => {
      if (authorName === BookApi.Author) return true;
      else return false;
    });

    if (author.length === 0) {
      return res.status(404).json({
        message: `Match not found for author '${Author}'.`,
      });
    }
    authorResult = author;
  }

  if (Genre) {
    const genre = BooksApi.filter((BookApi) => {
      if (genreName === BookApi.Genre) return true;
      else return false;
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
});

//Get book information by id from book api stores

app.get("/bookapi/:bookId", (req, res) => {
  const params = req.params;
  console.log("params", params);

  const bookId = parseInt(params.bookId);

  const bookIdx = BooksApi.findIndex((BookApi) => {
    if (bookId === BookApi.id) return true;
    else return false;
  });

  if (bookIdx === -1) {
    //Book is not found

    res.status(404).json({
      message: `Book not found by Id ${bookId}`,
    });
    return;
  }

  //todo is found to display it
  res.json({
    message: "Fetched Book by id.",
    data: BooksApi[bookIdx],
  });

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
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000 ");
});
