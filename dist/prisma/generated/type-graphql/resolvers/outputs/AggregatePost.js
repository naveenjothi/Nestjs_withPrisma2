"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePost = void 0;
const TypeGraphQL = require("type-graphql");
const PostAvgAggregate_1 = require("../outputs/PostAvgAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const PostSumAggregate_1 = require("../outputs/PostSumAggregate");
let AggregatePost = class AggregatePost {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], AggregatePost.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostAvgAggregate_1.PostAvgAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", PostAvgAggregate_1.PostAvgAggregate)
], AggregatePost.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostSumAggregate_1.PostSumAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", PostSumAggregate_1.PostSumAggregate)
], AggregatePost.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", PostMinAggregate_1.PostMinAggregate)
], AggregatePost.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", PostMaxAggregate_1.PostMaxAggregate)
], AggregatePost.prototype, "max", void 0);
AggregatePost = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], AggregatePost);
exports.AggregatePost = AggregatePost;
//# sourceMappingURL=AggregatePost.js.map