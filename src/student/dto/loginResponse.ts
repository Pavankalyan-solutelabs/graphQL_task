import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class loginResponse{

    @Field()
    email:string

    @Field()
    password:string
}