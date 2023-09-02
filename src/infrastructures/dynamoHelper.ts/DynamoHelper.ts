import * as dynamoose from 'dynamoose';
import { ModelType } from 'dynamoose/dist/General';
import { AnyItem } from 'dynamoose/dist/Item';

export class DynamoHelper {
  static async upsert(Model: ModelType<AnyItem>, data: Record<string, unknown>): Promise<void> {
    try {
      const ddb = new dynamoose.aws.ddb.DynamoDB({
        region: process.env.AWS_REGION,
      });

      dynamoose.aws.ddb.set(ddb);

      const item = new Model(data);

      item.save();
    } catch (error) {
      throw new Error('Failed when trying to insert or update item from database');
    }
  }

  static async findOne(model: ModelType<AnyItem>, key: string, value: string): Promise<AnyItem> {
    const [result] = await model.query(key).eq(value).exec();

    return result;
  }
}
