import { Request, Response } from "express";
import { BookApi, getAllBooks } from "../models/Book_Stores_model";

export const getAllBooksController = (req: Request, res: Response) => {
  const { Author, Genre } = req.query;
  const query = req.query;

  const authorName = Author as string;
  const genreName = Genre as string;

  const BooksData = getAllBooks();

  if (!query.Author && !query.Genre) {
    return res.json({
      message: "Books Information Fetched",
      data: BooksData,
    });
  }

  let authorResult: BookApi[] = [];
  let genreResult: BookApi[] = [];

  if (Author) {
    const author = BooksData.filter((BookApi) => {
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
    const genre = BooksData.filter((BookApi) => {
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

  //  res.json({
  //     message: "All books data fetched.",
  //     data: BooksData,
  //   });
};
