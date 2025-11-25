import { Request, Response } from "express";
import { BookApi } from "../sql_models/book_store.model";
import { addBooks } from "../sql_models/book_store.model";

export const addBooksController = async (req: Request, res: Response) => {
  console.log("Body", req.body);

  // const NewApi: BookApi = req.body;

  const NewBookApi = req.body as BookApi;

  const booksAdded = await addBooks(NewBookApi);

  res.json({
    message: "Book Api's created.",
    Data: booksAdded,
  });
};
