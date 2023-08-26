export interface ILogger {
  debug(message: string, params?: object): void;
  error(message: string, ex?: Error | unknown, params?: object): void;
  info(message: string, params?: object): void;
  warn(message: string, params?: object): void;
}
