import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";

@Injectable()
export class BookService {
  public bookData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.bookData.push(book);
    return "Book Added Successfully";
  }
  updateBook(id: number, updateBook: BookEntity): string {
    for (let item of this.bookData) {
      if (item.id === id) {
        item = updateBook;
      }
    }
    return "book add success ";
  }
  deleteBook(id: number): string {
    this.bookData = this.bookData.filter((book) => book.id !== id);
    return "Successfully Deleted";
  }
  findById(id: number): BookEntity {
    const data = this.bookData.find((item) => item.id === id);
    return data;
  }
  findAllBooks(): BookEntity[] {
    return this.bookData;
  }
}
