import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from "bcrypt"
import { StudentService } from 'src/student/student.service';
import { CreateStudentInput } from 'src/student/dto/create-student.input';
import { LoginObj } from 'src/student/entities/login.obj';
import { loginResponse } from 'src/student/dto/loginResponse';
import { loginEntity } from 'src/student/entities/login-entity';

@Injectable()
export class AuthService {

    constructor( private studentService:StudentService,private jwtService:JwtService){}


    async validateUser(email:string, password:string):Promise<any>{
        const user=await this.studentService.findOne(email)
        const validate=await bcrypt.compare(password, user?.password);
        if(user && validate){
           const  {password,...result}=user 
            return result;
        }
        return "not valid credentials";
    }

    async login(user:loginEntity){
       // const user=await this.userService.findOne(loginuserInput.username)

        // const  {password,...result}=user ;
        return {
            access_token:this.jwtService.sign({
                email:user.email,
                sub:user.id
            }),
            user
        }
    }

    async create(createStudent: CreateStudentInput){
        const user=await this.studentService.findOne(createStudent.email);
        console.log('user',user)
        if(user){
            throw new Error("User already in use...!")
        }
        
        const HashedPswd=await bcrypt.hash(createStudent.password,10);
        createStudent.password=HashedPswd;
        return this.studentService.create(createStudent);
        
       
    }
}
