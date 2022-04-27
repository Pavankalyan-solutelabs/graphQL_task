import { InputType, Int, Field } from '@nestjs/graphql';
import { AllowedRole } from 'src/role';

@InputType()
export class CreateStudentInput {
  @Field()
  firstname:string

  @Field()
  lastname:string

  @Field()
  email:string

  @Field()
  password:string

  @Field()
  role:string
}
