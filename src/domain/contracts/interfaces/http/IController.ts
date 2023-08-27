import { ApplicationEvents } from '@domain/enums/ApplicationEvents';
import { ApplicationResult } from '@domain/responses/ApplicationResult';
import { toSnakeCase } from '@utils/toSnakeCase';
import { StatusCodes } from 'http-status-codes';
import { IHttpResponse } from '@domain/contracts/interfaces/http/responses/IHttpResponse';

export abstract class BaseController {
  handleResult<T>(result: ApplicationResult<T>): IHttpResponse {
    if (result.status === ApplicationEvents.NOT_FOUND) {
      return {
        body: JSON.stringify({ message: result.errorMessage }),
        statusCode: StatusCodes.NOT_FOUND,
      };
    }
    if (result.status === ApplicationEvents.FORBIDDEN) {
      return {
        body: JSON.stringify({ message: result.errorMessage }),
        statusCode: StatusCodes.FORBIDDEN,
      };
    }
    if (result.status === ApplicationEvents.UNAUTHORIZED) {
      return {
        body: JSON.stringify({ message: result.errorMessage }),
        statusCode: StatusCodes.UNAUTHORIZED,
      };
    }

    if (result.status === ApplicationEvents.ERROR) {
      return {
        body: JSON.stringify({ message: result.errorMessage }),
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }

    if (result.data === undefined) {
      return {
        body: JSON.stringify(result.data),
        statusCode: StatusCodes.NO_CONTENT,
      };
    }

    if (result.data instanceof Array) {
      return {
        body: JSON.stringify(result.data.map((item) => toSnakeCase(item))),
        statusCode: StatusCodes.OK,
      };
    }

    return {
      body: JSON.stringify(toSnakeCase(result.data as object)),
      statusCode: StatusCodes.OK,
    };
  }
}
