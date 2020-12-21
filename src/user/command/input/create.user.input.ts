import { Field, InputType } from "@nestjs/graphql";

@InputType({ description: "Create User Input" })
export class UserCreateInput {
   @Field()
   email: string;

   @Field({ nullable: true })
   name?: string;
}
