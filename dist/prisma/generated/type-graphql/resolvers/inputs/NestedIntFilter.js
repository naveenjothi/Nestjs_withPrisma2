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
var NestedIntFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntFilter = void 0;
const TypeGraphQL = require("type-graphql");
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedIntFilter)
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
//# sourceMappingURL=NestedIntFilter.js.map