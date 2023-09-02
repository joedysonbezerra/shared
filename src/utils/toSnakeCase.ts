import humps from 'humps';

export function toSnakeCase(obj: object): Record<string, string> {
  return humps.decamelizeKeys(obj) as Record<string, string>;
}
