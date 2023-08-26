import humps from 'humps';

export function toCamelCase(obj: object) {
  return humps.camelizeKeys(obj);
}
