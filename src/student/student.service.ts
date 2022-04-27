import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { studentEntity } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(studentEntity)
    private studentRepo: Repository<studentEntity>,
    
  ) {}

  async create(createStudentInput: CreateStudentInput): Promise<studentEntity> {
    let user=await this.studentRepo.create(createStudentInput)
    console.log("service",user);
    return this.studentRepo.save(user) ;
  }


  async findAll():Promise<studentEntity[]>{
    return this.studentRepo.find();
  }

  async findOne(mail: string): Promise<studentEntity> {
    return this.studentRepo.findOne({ where: { email: mail } });
  }

  // update(id: number, updateStudentInput: UpdateStudentInput) {
  //   return `This action updates a #${id} student`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} student`;
  // }
}
