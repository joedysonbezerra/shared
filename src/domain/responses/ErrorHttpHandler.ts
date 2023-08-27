import { ILogger } from '@domain/contracts/infrastructure/ILogger';
import { IErrorHttpHandler } from '@domain/contracts/interfaces/http/responses/IErrorHttpHandler';
import { IHttpResponse } from '@domain/contracts/interfaces/http/responses/IHttpResponse';
import { ValidationError } from 'class-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

@injectable()
class ErrorHttpHandler implements IErrorHttpHandler {
  constructor(
    @inject('Logger')
    private logger: ILogger
  ) {}

  handleValidationErrors(validationErrors: ValidationError[], name: string): IHttpResponse {
    this.logger.error('The request contains invalid data', undefined, {
      controller: name,
      validationErrors,
    });

    const userFriendlyErrors = validationErrors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));

    return {
      body: JSON.stringify({
        message: ReasonPhrases.BAD_REQUEST,
        errors: userFriendlyErrors,
      }),
      statusCode: StatusCodes.BAD_REQUEST,
    };
  }
}

export { ErrorHttpHandler };
