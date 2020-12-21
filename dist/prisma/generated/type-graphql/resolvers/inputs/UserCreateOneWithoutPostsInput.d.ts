import { UserCreateOrConnectWithoutpostsInput } from "../inputs/UserCreateOrConnectWithoutpostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput | undefined;
}
