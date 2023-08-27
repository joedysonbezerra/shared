export function realToCentavos(value: number): number {
  const str = value.toString();
  const [int] = str.split('.');

  return Number(
    value
      .toFixed(2)
      .replace('.', '')
      .padEnd(int.length === 1 ? 3 : 4, '0')
  );
}
