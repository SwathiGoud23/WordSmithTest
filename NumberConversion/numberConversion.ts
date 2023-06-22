function arabicToRoman(num: number): string {
    if (num <= 0 || num >= 4000) {
      throw new Error('Number out of range');
    }
  
    const romanNumerals: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];
  
    let result = '';
  
    for (const [value, symbol] of romanNumerals) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    return result;
  }

  console.log(arabicToRoman(9)); // Output: "IX" 
  console.log(arabicToRoman(42)); // Output: "XLII" 
  console.log(arabicToRoman(1994)); // Output: "MCMXCIV"