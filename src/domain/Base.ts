import { plainToClass } from 'class-transformer';
import { toCamelCase } from '@utils/toCamelCase';

abstract class Base {
  static fromPlain<T extends object>(type: new () => T, plain: NonNullable<unknown>) {
    const entity: T = plainToClass(type, toCamelCase(plain));
    return entity;
  }
}
export { Base };
