import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "src/graphql";
@Resolver((of) => Book)
export class BookResolver {
  @Query((returns) => [Book], { name: "books" })
  getBook() {
    let data: BookModel[] = [
      { id: 1, title: "Book 1", price: 100 },
      { id: 2, title: "Book 2", price: 200 },
    ];
    return data;
  }
}
