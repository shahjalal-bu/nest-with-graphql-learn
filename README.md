### Setup

```bash
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

### 1. Implement App.module.ts

**src\app.resolver.ts:**

```typescript
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Nest with graphql has two approach.

- Schema First approach
- Code First Approach

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
