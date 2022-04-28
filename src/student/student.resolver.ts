import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from 'src/student_auth/auth.service';
import { GqlAuthGuard } from 'src/student_auth/guards/gql-authguard';

import { CreateStudentInput } from './dto/create-student.input';
import { loginResponse } from './dto/loginResponse';
import { UpdateStudentInput } from './dto/update-student.input';
import { LoginStudent } from './entities/login.entity';
import { Student } from './entities/student-entity.obj';
import { StudentService } from './student.service';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}


  @Query(() => [Student], { name: 'student' })
  findAll() {
    return this.studentService.findAll();
  }

  
  @Mutation(() => Student)
  updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.studentService.update(updateStudentInput.id, updateStudentInput);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.remove(id);
  }
}
