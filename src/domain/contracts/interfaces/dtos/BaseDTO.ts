import { ValidationError, validateSync } from 'class-validator';
import { Base } from '@domain/Base';

export class BaseDTO extends Base {
  static validate<T extends object>(type: new () => T, plain: NonNullable<unknown>): { entity: T; errors: ValidationError[] } {
    const entity = this.fromPlain(type, plain);
    const validationErrors: ValidationError[] = validateSync(entity);

    return { entity, errors: validationErrors };
  }
}
