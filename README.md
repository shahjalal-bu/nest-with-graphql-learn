### Code First Approach: In the code first approach, you use TypeScript classes and decorators to generate the GraphQL schema. This approach is more convenient and efficient, but it can be less flexible than the schema first approach.

#### 1. Define GraphQL Schema using TypeScript Decorators

Define types and resolvers directly in TypeScript using decorators.

**src\book\book.model.ts:**

```typescript
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
  @Field((type) => Int)
  id: number;
  @Field()
  title: string;
  @Field((type) => Int, { nullable: true })
  price: number;
}
```

#### 2. Define GraphQL Resolver

**src\book\book.resolver.ts:**

```typescript
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
```

#### 3. Define Book Module and connect book resolver

**src\book\book.module.ts:**

```typescript
import { Module } from "@nestjs/common";
import { BookResolver } from "./book.resolver";
@Module({
  providers: [BookResolver],
})
export class BookModule {}
```

#### 4. Configure graphql and connect book module

**src\app.module.ts**

```typescript
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { join } from "path";
import { cwd } from "process";
import { BookModule } from "./book/book.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions: {
        path: join(process.cwd(), "src/graphql.ts"),
      },
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

In the Code First approach, the schema is generated based on the TypeScript classes and decorators, while in the Schema First approach, the schema is defined independently of the code using the GraphQL SDL and then connected to resolvers in the codebase. Both approaches achieve the same outcome, but they differ in how the schema is defined and integrated into the application. -->
