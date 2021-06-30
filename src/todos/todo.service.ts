import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo } from "./interfaces/todo.interface";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel('Todo') private readonly todoModel: Model<Todo>
    ) {}

    async getAllTodos(): Promise<any> {
        return await this.todoModel.find({})
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = new this.todoModel(createTodoDto);
        await todo.save();
        return todo;
    }

    async updateTodo(id: string, updateToDoDto: UpdateTodoDto): Promise<Todo> {
        return await this.todoModel.findOneAndUpdate({_id: id}, updateToDoDto, {new: true})
    }

    async deleteTodo(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndDelete({_id: id});
    }
}