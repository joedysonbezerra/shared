import humps from 'humps';

export function toSnakeCase(obj: object) {
  return humps.decamelizeKeys(obj);
}
