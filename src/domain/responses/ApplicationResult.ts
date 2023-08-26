import { ApplicationResultSuccess } from '@domain/responses/ApplicationResultSuccess';
import { ApplicationResultError } from '@domain/responses/ApplicationResultError';
import { ApplicationResultNotFound } from '@domain/responses/ApplicationResultNotFound';
import { ApplicationResultUnauthorized } from '@domain/responses/AplicationResultUnauthorized';
import { ApplicationResultForbidden } from '@domain/responses/AplicationResultForbidden';

export type ApplicationResult<S = undefined> =
  | ApplicationResultSuccess<S>
  | ApplicationResultError
  | ApplicationResultNotFound
  | ApplicationResultUnauthorized
  | ApplicationResultForbidden;
