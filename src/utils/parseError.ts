const parseError = (error?: Error): Error | string | undefined => {
  if (error === undefined) {
    return undefined;
  }

  if (error instanceof Object) {
    return JSON.stringify(error);
  }

  return error;
};

export { parseError };
