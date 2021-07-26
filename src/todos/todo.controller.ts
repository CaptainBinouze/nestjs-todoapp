import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('todo')
export class TodoController {

    constructor(
        private readonly todoService: TodoService,
    ) {}

    @UseGuards(AuthGuard('local'))
    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.getAllTodos();
    }

    @Post()
    async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return await this.todoService.createTodo(createTodoDto);
    }

    @Put(':id')
    async updateTodo(@Param('id') id: string, @Body() updateToDoDto: UpdateTodoDto): Promise<Todo>  {
        return await this.todoService.updateTodo(id, updateToDoDto);
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: string): Promise<Todo> {
        return await this.todoService.deleteTodo(id);
    }
}
