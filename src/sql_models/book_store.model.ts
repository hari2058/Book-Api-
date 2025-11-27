import { RowDataPacket } from "mysql2";
import { appDbConnection } from "../lib/mySql";
// import { BooksApi } from "../models/Book_Stores_model";

export interface BookApi extends RowDataPacket {
  id: number;
  title: string;
  author_id: number;
  genre_id: number;
  published_date: string;
  language: string;
  description: string;
  updated_at: string;
  created_at: string;
  //   Status: "COMPLETED" | "ONGOING" | "DROPPED";
}



export async function addBooks(BookData: BookApi) {
  const db = await appDbConnection();
  const result = await db.query(
    `INSERT INTO books
     (title, published_date, author_id, genre_id, created_at, updated_at, language, description)
     VALUES ("${BookData.title}","${BookData.published_date}",${BookData.author_id},${BookData.genre_id},"${BookData.created_at}",
    "${BookData.updated_at}","${BookData.language}","${BookData.description}");`
  );
  console.log("Created todo result", result);
  return BookData;
}

export async function getBooksById(bookId: number) {
  const db = await appDbConnection();

  const result = await db.query(`
    SELECT * FROM books WHERE id = ${bookId};

  `); // [ queryresult, fieldPacket[]]
  // we will only need queryREsult

  const BookData = result[0] as BookApi[];
  console.log("get BookData", BookData);

  if (BookData.length === 0) {
    throw new Error(`Book not found by id ${bookId}`);
  }
  return {
    data: BookData,
  };
}

export async function updateBooks(bookId: number, body: Partial<BookApi>) {
  const BookData = await getBooksById(bookId);

  if (!BookData.data) {
    throw new Error(`Books not found by id ${bookId}`);
  }

  const db = await appDbConnection();

  const result = await db.query(`
    
    UPDATE books set 
    title="${body.title}",
    ${
      body.description?.length && body.description?.length > 0
        ? `description= "${body.description}",`
        : ""
    }
    updated_at="${body.updated_at}"
    WHERE id=${bookId};
    `);
    console.log("updated Result", result);

  return result;
}

// export function deleteBooks(bookId: number) {
//   const booksData = getBooksById(bookId);

//   if (!booksData.data) {
//     throw new Error(`Books not found by id ${bookId}`);
//   }

//   const splicedBook = BooksApi.splice(booksData.Idx, 1);
//   return splicedBook;
// }

// export function getAllBooks() {
//   return BooksApi;
// }
