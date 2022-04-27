import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type } from 'os';
import { AllowedRole } from 'src/role';

@ObjectType()
export class Student {
  @Field()
  id: number;

  @Field()
  firstname:string

  @Field()
  lastname:string

  @Field()
  email:string

  @Field()
  role:string
  
  @Field()
  password:string

 
}
