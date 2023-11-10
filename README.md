## Setup

## Nest with graphql has two approach.

- Schema First approach
- Code First Approach

### Schema First Approach: In the schema first approach, you define the GraphQL schema using GraphQL's Schema Definition Language (SDL) and then implement a service by matching the definitions in the schema. This approach gives you more control over the shape of your schema, but it can be more time-consuming to set up and maintain.

#### 1. Define GraphQL Schema using SDL (Schema Definition Language)

Create a `.graphql` file to define your GraphQL schema.

**src\book\book.schema.graphql:**

```graphql
type Book {
  id: ID!
  title: String!
  author: String!
}

type Query {
  books: [Book]
}
```

#### 2. Implement Resolvers for the Defined Schema

Use NestJS decorators and TypeScript to define the resolvers.

**src\book\book.resolver.ts:**

```typescript
import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Book")
export class BookResolver {
  @Query()
  books() {
    return [
      { id: 1, title: "Book 1", author: "Author 1" },
      { id: 2, title: "Book 2", author: "Author 2" },
    ];
  }
}
```

#### 3. Implement Book Module

**src\book\book.module.ts:**

```typescript
import { Module } from "@nestjs/common";
import { BookResolver } from "./book.resolver";

@Module({
  imports: [],
  controllers: [],
  providers: [BookResolver],
})
export class BookModule {}
```

### 4. Implement App.module.ts

**src\app.resolver.ts:**

```typescript
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { BookModule } from "./book/book.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true, //only for local
      typePaths: ["./**/*.graphql"], //for schema first approach
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

<!-- ### Code First Approach: In the code first approach, you use TypeScript classes and decorators to generate the GraphQL schema. This approach is more convenient and efficient, but it can be less flexible than the schema first approach.

#### 1. Define GraphQL Schema using TypeScript Decorators

Define types and resolvers directly in TypeScript using decorators.

**book.model.ts:**

```typescript
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;
}
```

**book.resolver.ts:**

```typescript
import { Resolver, Query } from "@nestjs/graphql";
import { Book } from "./book.model";

@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book])
  books(): Book[] {
    // Resolver logic to fetch books from a database or any data source
    return [
      { id: 1, title: "Book 1", author: "Author 1" },
      { id: 2, title: "Book 2", author: "Author 2" },
    ];
  }
}
```

In the Code First approach, the schema is generated based on the TypeScript classes and decorators, while in the Schema First approach, the schema is defined independently of the code using the GraphQL SDL and then connected to resolvers in the codebase. Both approaches achieve the same outcome, but they differ in how the schema is defined and integrated into the application. -->
