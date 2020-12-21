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
exports.UpsertPostArgs = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateInput_1 = require("../../../inputs/PostCreateInput");
const PostUpdateInput_1 = require("../../../inputs/PostUpdateInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let UpsertPostArgs = class UpsertPostArgs {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, { nullable: false }),
    __metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], UpsertPostArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateInput_1.PostCreateInput, { nullable: false }),
    __metadata("design:type", PostCreateInput_1.PostCreateInput)
], UpsertPostArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateInput_1.PostUpdateInput, { nullable: false }),
    __metadata("design:type", PostUpdateInput_1.PostUpdateInput)
], UpsertPostArgs.prototype, "update", void 0);
UpsertPostArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertPostArgs);
exports.UpsertPostArgs = UpsertPostArgs;
//# sourceMappingURL=UpsertPostArgs.js.map