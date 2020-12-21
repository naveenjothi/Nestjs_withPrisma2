import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "GraphQl Model Schemas are defined here" })
export class UserSchema {
   @Field(() => Number, { nullable: true })
   id: number;

   @Field({ nullable: true })
   email: string;

   @Field({ nullable: true })
   name: string;
}
