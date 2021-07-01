import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo } from "./interfaces/todo.interface";

@Injectable()
export class TodoService {
    private readonly logger = new Logger(TodoService.name);

    constructor(
        @InjectModel('Todo') private readonly todoModel: Model<Todo>
    ) { }

    async getAllTodos(): Promise<any> {
        return await this.todoModel.find({})
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = new this.todoModel(createTodoDto);
        await todo.save();

        this.logger.log('createTodo - TODO#'+todo.id+' was created')
        return todo;
    }

    async updateTodo(id: string, updateToDoDto: UpdateTodoDto): Promise<Todo> {

        if(!Types.ObjectId.isValid(id)) {
            this.logger.error('updateTodo - with invalid id : #'+id)
            throw new HttpException('Id must be single String of 12 bytes or a string of 24 hex characters', HttpStatus.BAD_REQUEST);
        }

        let user = await this.todoModel.findOne({ _id: id })

        if (!user) { throw new HttpException('Todo Not found', HttpStatus.NOT_FOUND); }

        await this.todoModel.updateOne({ _id: id }, updateToDoDto, { new: true })

        user = await this.todoModel.findOne({ _id: id })

        this.logger.log('updateTodo - TODO#'+id+' was updated')

        return user
    }

    async deleteTodo(id: string): Promise<Todo> {

        if(!Types.ObjectId.isValid(id)) {
            this.logger.error('deleteTodo - with invalid id : #'+id)
            throw new HttpException('Id must be single String of 12 bytes or a string of 24 hex characters', HttpStatus.BAD_REQUEST);
        }

        let user = await this.todoModel.findByIdAndDelete({ _id: id });

        if (!user) {
            throw new HttpException('Todo Not found', HttpStatus.NOT_FOUND);
        }

        this.logger.log('deleteTodo - TODO#'+id+' was deleted')

        return user

    }
}