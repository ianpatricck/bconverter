interface IConverterUseCase {
  decimalToBinary(decimal: number): number | null;
  binaryToDecimal(binary: number): number | null;
  decimalToHexadecimal(decimal: number): string | null;
  hexadecimalToDecimal(hexadecimal: string): number | null;
  binaryToHexadecimal(binary: number): string | null;
  hexadecimalToBinary(hexadecimal: string): number | null;
  decimalToOctal(decimal: number): number | null;
  octalToDecimal(octal: number): number | null;
  octalToHexadecimal(octal: number): string | null; 
  hexadecimalToOctal(hexadecimal: string): number | null;
  octalToBinary(octal: number): number | null;

}

export default IConverterUseCase;
