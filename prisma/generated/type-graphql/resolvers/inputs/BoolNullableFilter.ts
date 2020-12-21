import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BoolNullableFilter {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(_type => NestedBoolNullableFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedBoolNullableFilter | undefined;
}
