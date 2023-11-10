/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { BookModule } from "./book/book.module";

@Module({
  imports: [
    //This code you provided is a configuration object for the GraphQLModule.forRoot() method. It tells Nest to use the ApolloDriver to manage the GraphQL server and to enable the GraphQL Playground for local development. It also tells Nest to use the ./**/*.graphql files as the GraphQL schema.
    // Here is a breakdown of the configuration object:
    // driver: The GraphQL driver to use. In this case, we are using the ApolloDriver.
    // playground: Whether or not to enable the GraphQL Playground. This is only useful for local development.
    // typeDefs: An array of paths to the GraphQL schema files. In this case, we are using all of the .graphql files in the current directory and its subdirectories.
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

//related error
// throw new Error(`No type definitions were found with the specified file name patterns: "${paths}". Please make sure there is at least one file that matches the given patterns.`);
// Error: No type definitions were found with the specified file name patterns: "./**/*.graphql". Please make sure there is at least one file that matches the given patterns.
//Sol
//It need at least a schema
