import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from 'src/student/dto/create-student.input';
import { loginResponse } from 'src/student/dto/loginResponse';
import { LoginStudent } from 'src/student/entities/login.entity';
import { Student } from 'src/student/entities/student-entity.obj';

import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-authguard';


@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Student, {name:"CreateStudent"})
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.authService.create(createStudentInput);
  }

  @Mutation(() => LoginStudent)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginStudentInput') loginstudentInput:loginResponse,
    @Context() context,
  ) {
    let data={email:loginstudentInput.email,
    password:loginstudentInput.password}
    console.log("ctx",context);
    return this.authService.login(context.user);
  }

  
}
