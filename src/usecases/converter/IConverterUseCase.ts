interface IConverterUseCase {
  decimalToBinary(decimal: number): number | null;
  binaryToDecimal(binary: number): number | null;
  decimalToHexadecimal(decimal: number): string | null;
}

export default IConverterUseCase;
