const formatter = new Intl.NumberFormat('nl-BE', {
  style: 'currency',
  currency: 'EUR',
});

// format number as currency string
// 123456.7910 => 123.456,79 €
export default function currencyFormatter(input: string): any {
  console.log('input', input);
  const value = Number.parseFloat(input);
  console.log('parse', value);
  if (Number.isNaN(value)) {
    console.log('got value', value);
    return input;
  }
  return formatter.format(value);
}
