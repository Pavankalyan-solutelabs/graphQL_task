import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class LoginObj{

    @Field()
    id:number

    @Field()
    email:string
}