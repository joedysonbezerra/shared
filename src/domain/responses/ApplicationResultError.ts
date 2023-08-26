import { ApplicationEvents } from '@domain/enums/ApplicationEvents';

export class ApplicationResultError {
  public readonly errorMessage: string;

  public readonly data?: unknown;

  public readonly isError = true;

  public readonly status: ApplicationEvents.ERROR = ApplicationEvents.ERROR;

  public constructor(errorMessage: string, data: unknown = undefined) {
    this.errorMessage = errorMessage;
    this.data = data;
  }
}
