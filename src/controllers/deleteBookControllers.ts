import { Request, Response } from "express";
import { deleteBooks } from "../models/Book_Stores_model";

export const deleteBookController = (req: Request, res: Response) => {
  const params = req.params;

  const bookId = params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const deletedBooks = deleteBooks(bookIdNum);

  res.json({
    message: "Deleted Book From Books Store",
    Data: deletedBooks,
  });
};
