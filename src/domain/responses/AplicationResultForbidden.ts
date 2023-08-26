import { ApplicationEvents } from '@domain/enums/ApplicationEvents';

export class ApplicationResultForbidden {
  public readonly errorMessage: string;

  public readonly isError = true;

  public readonly status: ApplicationEvents.FORBIDDEN = ApplicationEvents.FORBIDDEN;

  public constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
