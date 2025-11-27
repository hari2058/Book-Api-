import { Request, Response } from "express";
import { getBooksById } from "../sql_models/book_store.model";


export const getBookByIdController = async(req: Request, res: Response) => {
  const params = req.params;

  const bookId = params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const bookById = await getBooksById(bookIdNum);

  //todo is found to display it
  res.json({
    message: "Fetched Book by id fetched successfully.",
    data: bookById.data,
  });
};
