import { PostCreateManyWithoutAuthorInput } from "../inputs/PostCreateManyWithoutAuthorInput";
export declare class UserCreateInput {
    email: string;
    name?: string | undefined;
    posts?: PostCreateManyWithoutAuthorInput | undefined;
}
