import { Field, ObjectType } from "@nestjs/graphql";

ObjectType();
export class Post {
   @Field()
   id: number;

   @Field()
   title: string;

   @Field({ nullable: true })
   content?: string;

   @Field({ defaultValue: false, nullable: true })
   published?: boolean;

   @Field({ nullable: true })
   authorId?: number;
}
