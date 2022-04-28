import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentEntity } from './entities/student.entity';
import { jwtStrategy } from 'src/student_auth/strategies/jwt.strategy';
import { localStrategy } from 'src/student_auth/strategies/local.strategy';

@Module({
  imports:[TypeOrmModule.forFeature([studentEntity])],
  providers: [StudentResolver, StudentService],
  exports:[StudentService]

 
  
})
export class StudentModule {}
