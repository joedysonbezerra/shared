import { ApplicationEvents } from '@domain/enums/ApplicationEvents';

export class ApplicationResultSuccess<T> {
  public readonly data: T;

  public readonly isError = false;

  public readonly status: ApplicationEvents.SUCCESS = ApplicationEvents.SUCCESS;

  public constructor(result: T) {
    this.data = result;
  }
}
