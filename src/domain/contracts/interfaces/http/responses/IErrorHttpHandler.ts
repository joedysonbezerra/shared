import { ValidationError } from 'class-validator';
import { IHttpResponse } from '@domain/contracts/interfaces/http/responses/IHttpResponse';

export interface IErrorHttpHandler {
  handleValidationErrors(validationErrors: ValidationError[], name: string): IHttpResponse;
}
