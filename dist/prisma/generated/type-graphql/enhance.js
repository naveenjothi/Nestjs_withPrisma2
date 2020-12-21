"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyModelsEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const models = require("./models");
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver
    }
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
            const decorators = resolverActionsConfig[modelResolverActionName];
            const crudTarget = crudResolversMap[modelName].prototype;
            const actionResolversConfig = actionResolversMap[modelName];
            const actionTarget = actionResolversConfig[modelResolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName));
                decorator(actionTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelClass = models[modelName];
        const modelTarget = models[modelName].prototype;
        const modelConfig = modelsEnhanceMap[modelName];
        if (modelConfig.class) {
            for (const decorator of modelConfig.class) {
                decorator(modelClass);
            }
        }
        if (modelConfig.fields) {
            for (const modelFieldName of Object.keys(modelConfig.fields)) {
                const decorators = modelConfig.fields[modelFieldName];
                for (const decorator of decorators) {
                    decorator(modelTarget, modelFieldName);
                }
            }
        }
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
//# sourceMappingURL=enhance.js.map