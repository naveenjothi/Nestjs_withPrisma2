import { PostCreateOrConnectWithoutauthorInput } from "../inputs/PostCreateOrConnectWithoutauthorInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutauthorInput[] | undefined;
}
