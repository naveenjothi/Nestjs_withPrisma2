import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    published?: BoolNullableFilter | undefined;
    authorId?: IntNullableFilter | undefined;
}
