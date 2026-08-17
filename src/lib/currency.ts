/** Formatação numérica pt-BR: milhar com "." e decimal com ",". */
export function formatAmount(input: string | number): string {
  const digits =
    typeof input === "number"
      ? Math.round(Math.abs(input) * 100).toString()
      : input.replace(/\D/g, "");

  const cents = (digits || "0").padStart(3, "0");
  const inteiro = cents.slice(0, -2).replace(/^0+(?=\d)/, "");
  const decimal = cents.slice(-2);

  return `${inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimal}`;
}

/** Converte "1.234,56" em 1234.56 */
export function parseAmount(value: string): number {
  const digits = value.replace(/\D/g, "");
  return Number(digits || 0) / 100;
}
