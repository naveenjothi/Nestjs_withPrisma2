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
exports.PostAvgAggregate = void 0;
const TypeGraphQL = require("type-graphql");
let PostAvgAggregate = class PostAvgAggregate {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], PostAvgAggregate.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], PostAvgAggregate.prototype, "authorId", void 0);
PostAvgAggregate = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], PostAvgAggregate);
exports.PostAvgAggregate = PostAvgAggregate;
//# sourceMappingURL=PostAvgAggregate.js.map