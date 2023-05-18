import { IncomingMessage, ServerResponse } from "http";
import IConverterUseCase from './IConverterUseCase';
import { RouteData } from '../../utils/route';

class ConverterController {

  constructor(
    private converterUseCase: IConverterUseCase
  ) {}

  async handle(request: IncomingMessage, response: ServerResponse, data: RouteData): Promise<ServerResponse> {
    
    const { rule, value } = data;

    if ((rule === undefined || value === undefined) || (rule === '' || value === '')) {

      response.statusCode = 402;

      return response.end(JSON.stringify({
        error: "rule or value can't be undefined",
        data: data
      }));
    }

    const rules = this.objectRules();

    if (!rules[rule as keyof object]) {

      response.statusCode = 402;

      return response.end(JSON.stringify({
        error: "rule not found",
        data: data
      }));
    }

    try {

      const FUNCTION_RULE: Function = rules[rule as keyof object];
      const isNumeric = Number(value) ? true : false; 

      var result = isNumeric ? FUNCTION_RULE(Number(value)) : FUNCTION_RULE(value);

      if (result !== undefined && result !== null && !isNaN(result)) {
        return response.end(JSON.stringify(result));
      } else {
        
        response.statusCode = 402;
        
        return response.end(JSON.stringify({
          error: 'value is not valid',
          data: data
        }));
      }

    } catch (err) {
      return response.end(JSON.stringify({ error: (err as Error).message })); 
    }
 
    return response.end(JSON.stringify(data));

  }

  objectRules(): object {
    return {
      'decimal-to-binary': this.converterUseCase.decimalToBinary
    }
  }


}

export default ConverterController;
