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
exports.PostCreateOrConnectWithoutauthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutauthorInput = class PostCreateOrConnectWithoutauthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutauthorInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput)
], PostCreateOrConnectWithoutauthorInput.prototype, "create", void 0);
PostCreateOrConnectWithoutauthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostCreateOrConnectWithoutauthorInput);
exports.PostCreateOrConnectWithoutauthorInput = PostCreateOrConnectWithoutauthorInput;
//# sourceMappingURL=PostCreateOrConnectWithoutauthorInput.js.map