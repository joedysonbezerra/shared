import { ApplicationEvents } from '@domain/enums/ApplicationEvents';

export class ApplicationResultUnauthorized {
  public readonly errorMessage: string;

  public readonly isError = true;

  public readonly status: ApplicationEvents.UNAUTHORIZED = ApplicationEvents.UNAUTHORIZED;

  public constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
