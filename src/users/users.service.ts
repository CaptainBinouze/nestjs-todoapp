import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./interfaces/users.interface";

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) { }

    async getOneUser(id: string): Promise<User> {
        return await this.userModel.findOne({_id: id})
    }  

    async getOneUserByUsername(username: string): Promise<User> {
        return await this.userModel.findOne({username: username})
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find({})
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create(createUserDto)
    }

    async deleteUser(id: string): Promise<User> { 
        return await this.userModel.findOneAndRemove({_id: id})
    }
}