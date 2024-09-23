import { Injectable } from "@nestjs/common";
import { UserDetails } from "./utilities/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/Users";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>){
       
    };

    async validateUser(details: UserDetails){

        console.log('AuthService');
        console.log(details)
        const user = await this.userRepository.findOneBy({email: details.email})

        // console.log('here')
        if (user) return user;
        // console.log('creating user')
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);
    }


    async findUser (id: number){
        const user = await this.userRepository.findOneBy({id});
        return user;
    }

    async findAllUsers(){
        const users = await this.userRepository.find();
        return users;
    }
}