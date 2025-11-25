export interface BookApi {
    id: number;
    Title: string;
    Author: string;
    Genre: string;
    Status: "COMPLETED" | "ONGOING" | "DROPPED";
    Date: number;
}
export declare let BooksApi: BookApi[];
export declare function addBooks(BookData: BookApi): BookApi;
export declare function getAllBooks(): BookApi[];
export declare function getBooksById(bookId: number): {
    Idx: number;
    data: BookApi | undefined;
};
export declare function deleteBooks(bookId: number): BookApi[];
export declare function updateBooks(bookId: number, body: Partial<BookApi>): BookApi[];
//# sourceMappingURL=Book_Stores_model.d.ts.map