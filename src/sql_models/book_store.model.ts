import { appDbConnection } from "../lib/mySql";

export interface BookApi {
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

// export let BooksApi: BookApi[] = [];

export async function addBooks(BookData: BookApi) {
  const db = await appDbConnection();
  const result = await db.query(
    `INSERT INTO books (title, published_date, author_id, genre_id, created_at, updated_at, language, description) VALUES ("${BookData.title}","${BookData.published_date}",${BookData.author_id},${BookData.genre_id},"${BookData.created_at}",
    "${BookData.updated_at}","${BookData.language}","${BookData.description}");`
  );
  console.log("Created todo result", result);
  return BookData;
}

// export function getAllBooks() {
//   return BooksApi;
// }

// export function getBooksById(bookId: number) {
//   const bookIdx = BooksApi.findIndex((BookApi) => {
//     if (BookApi.id === bookId) return true;
//     else return false;
//   });

//   if (bookIdx === -1) {
//     throw new Error(`Book not found by id ${bookIdx}`);
//   }
//   return {
//     Idx: bookIdx,
//     data: BooksApi[bookIdx],
//   };
// }

// export function deleteBooks(bookId: number) {
//   const booksData = getBooksById(bookId);

//   if (!booksData.data) {
//     throw new Error(`Books not found by id ${bookId}`);
//   }

//   const splicedBook = BooksApi.splice(booksData.Idx, 1);
//   return splicedBook;
// }

// export function updateBooks(bookId: number, body: Partial<BookApi>) {
//   const booksData = getBooksById(bookId);

//   if (!booksData.data) {
//     throw new Error(`Books not found by id ${bookId}`);
//   }

//   const updatedBooks = BooksApi.map((BookApi) => {
//     if (bookId === BookApi.id) {
//       // book found to update
//       return {
//         ...BookApi,
//         ...body,
//       };
//     } else {
//       return BookApi;
//     }
//   });

//   BooksApi = updatedBooks;

//   return BooksApi;
// }
