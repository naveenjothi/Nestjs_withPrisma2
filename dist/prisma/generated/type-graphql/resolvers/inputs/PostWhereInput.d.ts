import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    published?: BoolNullableFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: IntNullableFilter | undefined;
}
