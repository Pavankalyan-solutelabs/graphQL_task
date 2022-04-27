import { InputType, Int, Field } from '@nestjs/graphql';
import { AllowedRole } from 'src/role';

@InputType()
export class CreateAdminInput {
  @Field(type => AllowedRole)
  role:AllowedRole

  @Field()
  schoolname:string[]

  @Field()
  studentname:string[]


}
