import  {Request, Response} from 'express';
import { addBooks, BookApi } from '../models/Book_Stores_model';

 export const addBooksController = (req: Request, res: Response) => {

  console.log("Body", req.body);
  
    // const NewApi: BookApi = req.body;
  
    const NewBookApi= req.body as BookApi;
  
     const booksAdded = addBooks(NewBookApi);
  
    res.json({
      message: "Book Api's created.",
      Data: booksAdded,
    });



      
    
}