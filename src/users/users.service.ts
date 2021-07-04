import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/users.interface";

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) { }

    async getOne(username: string): Promise<User> {
        return await this.userModel.findOne({username: username})
    }  
}