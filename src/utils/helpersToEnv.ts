import assert from 'assert';

export function getEnvOrThrow(envName: string): string {
  const env = process.env[envName];
  assert(env, `Missing environment variable ${envName}`);

  return env;
}

export function getEnvOrDefault(envName: string, defaultValue: string): string {
  return process.env[envName] ?? defaultValue;
}
