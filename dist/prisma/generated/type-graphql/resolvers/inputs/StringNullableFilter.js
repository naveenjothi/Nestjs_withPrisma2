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
exports.StringNullableFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedStringNullableFilter_1 = require("../inputs/NestedStringNullableFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
//# sourceMappingURL=StringNullableFilter.js.map