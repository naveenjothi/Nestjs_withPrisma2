import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
      const decorators = resolverActionsConfig[
        modelResolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const crudTarget = crudResolversMap[modelName].prototype;
      const actionResolversConfig = actionResolversMap[modelName];
      const actionTarget = (actionResolversConfig[
        modelResolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
        );
        decorator(
          actionTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
        );
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<
  TModel extends ModelNames
  > = keyof typeof models[TModel]["prototype"];

export type ModelFieldsConfig<TModel extends ModelNames> = {
  [TActionName in ModelFieldNames<TModel>]?: PropertyDecorator[];
};

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
}

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelClass = models[modelName];
    const modelTarget = models[modelName].prototype;
    const modelConfig = modelsEnhanceMap[modelName]!;
    if (modelConfig.class) {
      for (const decorator of modelConfig.class) {
        decorator(modelClass);
      }
    }
    if (modelConfig.fields) {
      for (const modelFieldName of Object.keys(modelConfig.fields)) {
        const decorators = modelConfig.fields[
          modelFieldName as keyof typeof modelConfig.fields
        ] as Array<PropertyDecorator>;

        for (const decorator of decorators) {
          decorator(modelTarget, modelFieldName);
        }
      }
    }
  }
}


