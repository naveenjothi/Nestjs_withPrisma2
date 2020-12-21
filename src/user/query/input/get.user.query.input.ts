import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GetUserQueryInput {
   @Field({ nullable: true })
   searchstring?: string;
}
