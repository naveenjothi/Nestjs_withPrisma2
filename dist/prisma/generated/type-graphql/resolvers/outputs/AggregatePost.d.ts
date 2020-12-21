import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";
export declare class AggregatePost {
    count: number | null;
    avg: PostAvgAggregate | null;
    sum: PostSumAggregate | null;
    min: PostMinAggregate | null;
    max: PostMaxAggregate | null;
}
