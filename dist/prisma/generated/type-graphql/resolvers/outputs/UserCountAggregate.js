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
exports.UserCountAggregate = void 0;
const TypeGraphQL = require("type-graphql");
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], UserCountAggregate.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
//# sourceMappingURL=UserCountAggregate.js.map