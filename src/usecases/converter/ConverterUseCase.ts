import IConverterUseCase from './IConverterUseCase';

class ConverterUseCase implements IConverterUseCase {

  decimalToBinary(decimal: number): number | undefined {

    var results: number[] = [];
    var counter = decimal;

    do {

      counter--;
      
      let rest = decimal % 2;
      decimal = Math.floor(decimal / 2);

      results.push(rest);
      if (decimal < 2) results.push(decimal); 

    } while (counter >= 2 && decimal >= 2);

    return Number(results.reverse().join(''));
  }

  binaryToDecimal(binary: number): number | undefined {
    // ...
    return binary;
  }

}

export default ConverterUseCase;
