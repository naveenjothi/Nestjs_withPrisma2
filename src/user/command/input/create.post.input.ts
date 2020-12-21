import { Field, InputType } from "@nestjs/graphql";

@InputType({ description: "Created a post input type" })
export class CreatePostInput {
   @Field()
   title: string;

   @Field({ nullable: true })
   content?: string;

   @Field({ defaultValue: false })
   published?: boolean;

   @Field(() => Number)
   authorId: number;
}
