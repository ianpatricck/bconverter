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
 
    let binaryList = Array.from(String(binary), Number);  
    let binaryPowAndSumList = binaryList.reverse().map((element, index) => Math.pow(2, index) * element);

    let decimalSum = binaryPowAndSumList.reduce((a, b) => a + b, 0);

    return decimalSum;

  }

}

export default ConverterUseCase;
