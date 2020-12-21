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
var NestedStringNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableFilter = void 0;
const TypeGraphQL = require("type-graphql");
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedStringNullableFilter)
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
//# sourceMappingURL=NestedStringNullableFilter.js.map