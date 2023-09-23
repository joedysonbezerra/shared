const parseError = (error?: Error): object | string | undefined => {
  if (!error) {
    return undefined;
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name,
    };
  }

  return error;
};

export { parseError };
