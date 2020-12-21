import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as models from "./models";
declare const crudResolversMap: {
    User: typeof crudResolvers.UserCrudResolver;
    Post: typeof crudResolvers.PostCrudResolver;
};
declare type ResolverModelNames = keyof typeof crudResolversMap;
declare type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export declare type ResolverActionsConfig<TModel extends ResolverModelNames> = {
    [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};
export declare type ResolversEnhanceMap = {
    [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
declare type ModelNames = keyof typeof models;
declare type ModelFieldNames<TModel extends ModelNames> = keyof typeof models[TModel]["prototype"];
export declare type ModelFieldsConfig<TModel extends ModelNames> = {
    [TActionName in ModelFieldNames<TModel>]?: PropertyDecorator[];
};
export declare type ModelConfig<TModel extends ModelNames> = {
    class?: ClassDecorator[];
    fields?: ModelFieldsConfig<TModel>;
};
export declare type ModelsEnhanceMap = {
    [TModel in ModelNames]?: ModelConfig<TModel>;
};
export declare function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap): void;
export {};
