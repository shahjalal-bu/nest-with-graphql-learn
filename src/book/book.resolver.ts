import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { Book as BookModel } from "src/graphql";
import { BookService } from "./book.service";
import { AddBookArg } from "./args/add.book.args";
@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  @Query((returns) => [Book], { name: "books" })
  getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks();
  }
  @Query((returns) => Book, { name: "findBookById", nullable: true })
  getBookById(
    @Args({ name: "bookId", type: () => Int }) id: number
  ): BookModel {
    return this.bookService.findById(id);
  }
  @Mutation((returns) => String, { name: "deleteBook" })
  deleteBook(@Args({ name: "bookId", type: () => Int }) id: number): string {
    return this.bookService.deleteBook(id);
  }
  @Mutation((returns) => String, { name: "addBook" })
  addBook(@Args("addBookArgs") addBookArgs: AddBookArg): string {
    return this.bookService.addBook(addBookArgs);
  }
}
