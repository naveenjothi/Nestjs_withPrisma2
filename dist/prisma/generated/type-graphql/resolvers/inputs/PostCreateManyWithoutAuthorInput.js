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
exports.PostCreateManyWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateOrConnectWithoutauthorInput_1 = require("../inputs/PostCreateOrConnectWithoutauthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateManyWithoutAuthorInput = class PostCreateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostCreateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostCreateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutauthorInput_1.PostCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostCreateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
PostCreateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostCreateManyWithoutAuthorInput);
exports.PostCreateManyWithoutAuthorInput = PostCreateManyWithoutAuthorInput;
//# sourceMappingURL=PostCreateManyWithoutAuthorInput.js.map