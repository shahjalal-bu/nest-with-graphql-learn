import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Book")
export class BookResolver {
  @Query("books")
  getAllBooks() {
    return [
      { id: 1, title: "Book 1", price: 100 },
      { id: 2, title: "Book 2", price: 200 },
    ];
  }
}
