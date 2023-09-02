import humps from 'humps';

export function toCamelCase(obj: object): Record<string, string> {
  return humps.camelizeKeys(obj) as Record<string, string>;
}
