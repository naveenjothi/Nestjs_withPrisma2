import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregatePost {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => PostAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: PostAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: PostSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: PostMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: PostMaxAggregate | null;
}
