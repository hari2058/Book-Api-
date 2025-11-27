import { Request, Response } from "express";
import { updateBooks } from "../sql_models/book_store.model";


export const updateBookController = async  (req: Request, res: Response) => {
  const body = req.body;
  const params = req.params;

  const bookId = parseInt(params.bookId as string);

  const updatedBooks = await updateBooks(bookId, body);

  res.json({
    message: "Books Store updated.",
    data: updatedBooks,
  });
};
