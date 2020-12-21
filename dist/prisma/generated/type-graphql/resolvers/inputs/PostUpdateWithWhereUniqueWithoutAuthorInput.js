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
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostUpdateWithoutAuthorInput_1 = require("../inputs/PostUpdateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutAuthorInput = class PostUpdateWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostUpdateWithWhereUniqueWithoutAuthorInput);
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = PostUpdateWithWhereUniqueWithoutAuthorInput;
//# sourceMappingURL=PostUpdateWithWhereUniqueWithoutAuthorInput.js.map