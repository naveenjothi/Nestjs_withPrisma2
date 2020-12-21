import { Post } from "../models/Post";
export declare class User {
    id: number;
    email: string;
    name?: string | null;
    posts?: Post[] | null;
}
