import { ApplicationResult } from '@domain/responses/ApplicationResult';

export interface IUseCase<Input, Output> {
  execute(input: Input): Promise<ApplicationResult<Output>> | ApplicationResult;
}
