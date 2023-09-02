export interface IDatabaseModel<ModelType> {
  tableName: string;
  model: ModelType;
  initModel(): void;
}
