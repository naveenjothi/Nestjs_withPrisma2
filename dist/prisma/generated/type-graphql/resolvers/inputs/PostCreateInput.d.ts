import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";
export declare class PostCreateInput {
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
    author?: UserCreateOneWithoutPostsInput | undefined;
}
