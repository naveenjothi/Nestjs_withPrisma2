import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutPostsInput } from "../inputs/UserUpdateOneWithoutPostsInput";
export declare class PostUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: NullableBoolFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneWithoutPostsInput | undefined;
}
