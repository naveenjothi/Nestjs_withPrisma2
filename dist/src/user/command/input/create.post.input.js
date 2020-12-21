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
exports.CreatePostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreatePostInput = class CreatePostInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreatePostInput.prototype, "content", void 0);
__decorate([
    graphql_1.Field({ defaultValue: false }),
    __metadata("design:type", Boolean)
], CreatePostInput.prototype, "published", void 0);
__decorate([
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "authorId", void 0);
CreatePostInput = __decorate([
    graphql_1.InputType({ description: "Created a post input type" })
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;
//# sourceMappingURL=create.post.input.js.map