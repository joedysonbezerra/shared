import { ApplicationEvents } from '@domain/enums/ApplicationEvents';

export class ApplicationResultNotFound {
  public readonly errorMessage: string;

  public readonly isError = true;

  public readonly status: ApplicationEvents.NOT_FOUND = ApplicationEvents.NOT_FOUND;

  public constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
