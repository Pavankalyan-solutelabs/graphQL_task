import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentEntity } from './entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([studentEntity])],
  providers: [StudentResolver, StudentService],
  exports:[StudentService]

 
  
})
export class StudentModule {}
