import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly _usersService: UsersService
    ) { }

    @Get()
    public async findAll(): Promise<User[]> {
        return await this._usersService.getAllUsers();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<User> {
        return await this._usersService.getOneUser(id);
    }

    @Post()
    public async create(@Body() createUserDto: CreateUserDto): Promise<User> {    
        return await this._usersService.createUser(createUserDto);
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<User> {   
        return await this._usersService.deleteUser(id);
    }
}
