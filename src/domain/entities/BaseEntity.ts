/* eslint-disable @typescript-eslint/no-empty-function */
import { Expose, Type } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { Base } from '@domain/Base';

export class BaseEntity extends Base {
  private id: string;

  private createdAt: Date;

  private updatedAt: Date;

  @Expose()
  public get uuid(): string {
    if (this.id) {
      return this.id;
    }
    this.id = BaseEntity.generateId();
    return this.id;
  }

  public set uuid(_: string) {}

  static generateId() {
    return uuidv4();
  }

  @Expose()
  @Type(() => Date)
  public get created_at(): Date {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
    return this.createdAt;
  }

  public set created_at(_: Date) {}

  @Expose()
  @Type(() => Date)
  public get updated_at(): Date {
    this.updatedAt = new Date();
    return this.updatedAt;
  }

  public set updated_at(_: Date) {}
}
