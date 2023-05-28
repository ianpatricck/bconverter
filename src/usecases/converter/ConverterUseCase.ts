import IConverterUseCase from './IConverterUseCase';

class ConverterUseCase implements IConverterUseCase {
 
  decimalToBinary(decimal: number): number | null {

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

  binaryToDecimal(binary: number): number | null {
    
    let binaryList = Array.from(String(binary), Number);  
    const differentElement = binaryList.filter(elem => elem !== 0 && elem !== 1);
    
    if (differentElement.length > 0)
      return null;

    let binaryPowAndSumList = binaryList.reverse().map((element, index) => Math.pow(2, index) * element);
    let decimalSum = binaryPowAndSumList.reduce((a, b) => a + b, 0);

    return decimalSum;
  }

  decimalToHexadecimal(decimal: number): string | null {

    var results: number[] = [];
    var counter = decimal;

    const numbersGreaterThanTen = {
      '10': 'A',
      '11': 'B',
      '12': 'C',
      '13': 'D',
      '14': 'E',
      '15': 'F'
    };

    do {

      counter--;
      
      let rest = decimal % 16;
      decimal = Math.floor(decimal / 16);

      results.push(rest);
      if (decimal < 2) results.push(decimal); 

    } while (counter >= 2 && decimal >= 2);

    let resultList = results.reverse().map(element => element.toString());
 
    resultList.forEach(n => {

      for (let prop in numbersGreaterThanTen) {
        if (n == prop)
          resultList[resultList.indexOf(n)] = numbersGreaterThanTen[prop as keyof object];
      }
    
    });

    const regex = new RegExp("^0+(?!$)",'g');
    const result = resultList.join('').replace(regex, "");

    return result;
  }
  
  hexadecimalToDecimal(hexadecimal: string): number | null {

    const numbersGreaterThanTen = {
      'A': '10',
      'B': '11',
      'C': '12',
      'D': '13',
      'E': '14',
      'F': '15'
    };

    let hexadecimalList = Array.from(String(hexadecimal), String);  

    hexadecimalList.forEach(n => {

      for (let prop in numbersGreaterThanTen) {
        if (n == prop)
          hexadecimalList[hexadecimalList.indexOf(n)] = numbersGreaterThanTen[prop as keyof object];
      }
    
    });

    let decimalList = hexadecimalList.map(Number);  
    let decimalPowAndSumList = decimalList.reverse().map((element, index) => Math.pow(16, index) * element);
    let decimalSum = decimalPowAndSumList.reduce((a, b) => a + b, 0);

    return decimalSum;
  }

  binaryToHexadecimal(binary: number): string | null {
    const decimalValue = this.binaryToDecimal(binary);

    if (typeof decimalValue === 'number') {
      const hexadecimalValue = this.decimalToHexadecimal(decimalValue);
      return hexadecimalValue;
    }

    return null;
  }

  hexadecimalToBinary(hexadecimal: string): number | null {
    const decimalValue = this.hexadecimalToDecimal(hexadecimal);

    if (typeof decimalValue === 'number') {
      const binaryValue = this.decimalToBinary(decimalValue);
      return binaryValue;
    }

    return null;
  }

  decimalToOctal(decimal: number): number | null {

    var results: number[] = [];
    var counter = decimal;

    do {

      counter--;
      
      let rest = decimal % 8;
      decimal = Math.floor(decimal / 8);

      results.push(rest);
      if (decimal < 2) results.push(decimal); 

    } while (counter >= 2 && decimal >= 2);

    return Number(results.reverse().join(''));
  }
 
  octalToDecimal(octal: number): number | null {
 
    let octalList = Array.from(String(octal), Number); 

    let octalPowAndSumList = octalList.reverse().map((element, index) => Math.pow(8, index) * element);
    let octalSum = octalPowAndSumList.reduce((a, b) => a + b, 0);

    return octalSum;
  } 

}

export default ConverterUseCase;
