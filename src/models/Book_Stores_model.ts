export interface BookApi {
  id: number;
  Title: string;
  Author: string;
  Genre: string;
  Status: "COMPLETED" | "ONGOING" | "DROPPED";
  Date: number;
}

export let BooksApi: BookApi[] = [];

export function addBooks(BookData: BookApi) {
  BooksApi.push(BookData);
  return BookData;
}

export function getAllBooks() {

 

   

   let authorResult: BookApi[] = [];
   let genreResult: BookApi[] = [];

  return BooksApi;
}

export function getBooksById(bookId: number) {

  const bookIdx = BooksApi.findIndex((BookApi) => {
    if (BookApi.id === bookId) return true;
    else return false;
  });

  if (bookIdx === -1) {
    throw new Error(`Book not found by id ${bookIdx}`);
  }
  return {
    Idx: bookIdx,
    data: BooksApi[bookIdx],
  };
}

export function deleteBooks(bookId: number) {

   const booksData = getBooksById(bookId);

   if (!booksData.data) {
     throw new Error(`Books not found by id ${bookId}`);
   }

  const splicedBook = BooksApi.splice(booksData.Idx, 1);
  return splicedBook;
}

export function updateBooks(bookId: number, body: Partial<BookApi>) {
  const booksData = getBooksById(bookId);

  if (!booksData.data) {
    throw new Error(`Books not found by id ${bookId}`);
  }

  const updatedBooks = BooksApi.map((BookApi) => {
    if (bookId === BookApi.id) {
      // book found to update
      return {
        ...BookApi,
        ...body,
      };
    } else {
      return BookApi;
    }
  });

  BooksApi = updatedBooks;

  return BooksApi;
}
