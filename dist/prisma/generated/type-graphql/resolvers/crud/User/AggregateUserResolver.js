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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const User_1 = require("../../../models/User");
const AggregateUser_1 = require("../../outputs/AggregateUser");
let AggregateUserResolver = class AggregateUserResolver {
    async aggregateUser(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                .filter(([key, value]) => !key.startsWith("_"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.user.aggregate(Object.assign(Object.assign({}, args), transformFields(graphql_fields_1.default(info))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    __metadata("design:returntype", Promise)
], AggregateUserResolver.prototype, "aggregateUser", null);
AggregateUserResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], AggregateUserResolver);
exports.AggregateUserResolver = AggregateUserResolver;
//# sourceMappingURL=AggregateUserResolver.js.map