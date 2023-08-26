// eslint-disable-next-line import/no-named-default
import { default as pino } from 'pino';
import { injectable } from 'inversify';
import { ILogger } from '@domain/contracts/infrastructure/ILogger';
import { parseError } from '@utils/parseError';

@injectable()
class Logger implements ILogger {
  private readonly logger: pino.Logger;

  public constructor(logLevel: string, applicationName: string) {
    this.logger = pino({
      changeLevelName: 'log-level',
      level: logLevel,
      messageKey: 'message',
      name: applicationName,
      timestamp: (): string => `,"date": "${new Date().toISOString()}"`,
      useLevelLabels: true,
      formatters: {
        level: (level) => ({ level }),
      },
    });
  }

  public debug(message: string, params: object): void {
    this.logger.debug(this.parseParams(params), message);
  }

  public error(message: string, ex?: Error, params?: object): void {
    this.logger.error(this.parseParams(params, ex), message);
  }

  public info(message: string, params: object): void {
    this.logger.info(this.parseParams(params), message);
  }

  public warn(message: string, params: object): void {
    this.logger.warn(this.parseParams(params), message);
  }

  private parseParams(params?: object, ex?: Error): object {
    const formated: { error?: ReturnType<typeof parseError>; [key: string]: unknown } = {
      ...params,
    };

    if (ex !== undefined) {
      formated.error = parseError(ex);
    }

    return formated;
  }
}

export { Logger };
