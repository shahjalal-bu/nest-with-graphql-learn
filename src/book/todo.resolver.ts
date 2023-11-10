import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Todo")
export class TodoResolver {
  @Query("todos")
  getTodo() {
    return [
      {
        id: 1,
        text: "Hello",
        status: "Doing",
      },
      {
        id:2,
        text:"World",
        status:"Done"
      }

    ];
  }
}
