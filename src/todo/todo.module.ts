import { Module } from "@nestjs/common";
import { TodoResolver } from "./todo.resolver";

@Module({ imports: [], controllers: [], providers: [TodoResolver] })
export class TodoModule {}
