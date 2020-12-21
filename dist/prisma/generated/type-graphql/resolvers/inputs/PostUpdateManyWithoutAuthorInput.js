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
exports.PostUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateOrConnectWithoutauthorInput_1 = require("../inputs/PostCreateOrConnectWithoutauthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutAuthorInput");
const PostUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput");
const PostUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput_1.PostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutAuthorInput_1.PostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput_1.PostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutauthorInput_1.PostCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
PostUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
//# sourceMappingURL=PostUpdateManyWithoutAuthorInput.js.map