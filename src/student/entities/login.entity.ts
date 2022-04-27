import { Field, ObjectType } from "@nestjs/graphql";
import { LoginObj } from "./login.obj";
import { Student } from "./student-entity.obj";


@ObjectType()
export class LoginStudent{

    @Field()
    access_token:string

    @Field(()=>LoginObj)
    user:LoginObj
}