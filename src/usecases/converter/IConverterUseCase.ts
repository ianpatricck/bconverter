interface IConverterUseCase {
  decimalToBinary(decimal: number): number | undefined;
  binaryToDecimal(binary: number): number | undefined;
}

export default IConverterUseCase;
