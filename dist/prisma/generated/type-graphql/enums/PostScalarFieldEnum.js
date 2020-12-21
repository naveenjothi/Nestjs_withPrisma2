"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["authorId"] = "authorId";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=PostScalarFieldEnum.js.map