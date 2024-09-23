import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users'; // Ajuste o caminho conforme necessário

@Injectable()
export class UserService {
  findAllUsers() {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
}
