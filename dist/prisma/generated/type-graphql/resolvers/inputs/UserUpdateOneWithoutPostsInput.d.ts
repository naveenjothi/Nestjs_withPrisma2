import { UserCreateOrConnectWithoutpostsInput } from "../inputs/UserCreateOrConnectWithoutpostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";
import { UserUpsertWithoutPostsInput } from "../inputs/UserUpsertWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutPostsInput | undefined;
    upsert?: UserUpsertWithoutPostsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput | undefined;
}
