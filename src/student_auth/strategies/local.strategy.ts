import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { CreateStudentInput } from "src/student/dto/create-student.input";
import { loginResponse } from "src/student/dto/loginResponse";
import { AuthService } from "../auth.service";




@Injectable()
export class localStrategy extends PassportStrategy(Strategy){

    constructor(private authServise:AuthService){
        super()
    }

    async validate(email:string,password:string):Promise<any>{
        const user=await this.authServise.validateUser(email, password);
        if(!user){
            throw new UnauthorizedException("something went wrong")
        }
        return user;
    }
}