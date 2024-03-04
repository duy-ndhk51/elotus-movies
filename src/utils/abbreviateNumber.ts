export default function abbreviateNumber(value: number): string | number {
  let newValue: string | number = value;
  if (value >= 1000) {
    const suffixes = ['', 'K', 'M', 'B'];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum += 1;
    }

    newValue = newValue.toPrecision(3) + suffixes[suffixNum];
  }
  return newValue;
}
