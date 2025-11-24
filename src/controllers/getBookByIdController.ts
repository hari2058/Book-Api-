import { Request, Response } from "express";
import { getBooksById } from "../models/Book_Stores_model";

export const getBookByIdController = (req: Request, res: Response) => {
  const params = req.params;

  const bookId = params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const bookById = getBooksById(bookIdNum);

  //todo is found to display it
  res.json({
    message: "Fetched Book by id fetched successfully.",
    data: bookById.data,
  });
};
