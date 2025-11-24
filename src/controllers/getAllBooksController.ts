import {Request , Response} from 'express';
import { getAllBooks } from '../models/Book_Stores_model';


export const getAllBooksController = (req: Request, res: Response) => {

 const BooksData = getAllBooks();

     res.json({
        message: "All books data fetched.",
        data: BooksData,
      });
}