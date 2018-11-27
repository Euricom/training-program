export default function stockedFormatter(input) {
  if (typeof input === 'undefined' || input === null) {
    return input;
  }
  if (typeof input !== 'boolean') {
    return input;
  }
  return input === true ? 'In stock' : 'Out of stock';
}
