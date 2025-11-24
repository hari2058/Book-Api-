import { Request, Response } from "express";
import { updateBooks } from "../models/Book_Stores_model";

export const updateBookController = (req: Request, res: Response) => {
  const body = req.body;
  const params = req.params;

  const bookId = parseInt(params.bookId as string);

  const updatedBooks = updateBooks(bookId, body);

  res.json({
    message: "Books Store updated.",
    data: updatedBooks,
  });
};
