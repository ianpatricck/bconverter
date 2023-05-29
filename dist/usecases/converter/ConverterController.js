"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConverterController {
    constructor(converterUseCase) {
        this.converterUseCase = converterUseCase;
    }
    async handle(request, response, data) {
        const { rule, value } = data;
        if ((rule === undefined || value === undefined) || (rule === '' || value === '')) {
            response.statusCode = 402;
            return response.end(JSON.stringify({
                error: "rule or value can't be undefined",
                data: data
            }));
        }
        const rules = this.objectRules();
        if (!rules[rule]) {
            response.statusCode = 402;
            return response.end(JSON.stringify({
                error: "rule not found",
                data: data
            }));
        }
        try {
            const FUNCTION_RULE = rules[rule];
            const isNumeric = Number(value) ? true : false;
            var result = isNumeric ? FUNCTION_RULE(Number(value)) : FUNCTION_RULE(value);
            return response.end(JSON.stringify(result));
        }
        catch (err) {
            return response.end(JSON.stringify({ error: err.message }));
        }
        return response.end(JSON.stringify(data));
    }
    objectRules() {
        return {
            'decimal-to-binary': this.converterUseCase.decimalToBinary,
            'binary-to-decimal': this.converterUseCase.binaryToDecimal,
            'decimal-to-hexadecimal': this.converterUseCase.decimalToHexadecimal,
            'hexadecimal-to-decimal': this.converterUseCase.hexadecimalToDecimal,
            'binary-to-hexadecimal': this.converterUseCase.binaryToHexadecimal.bind(this.converterUseCase),
            'hexadecimal-to-binary': this.converterUseCase.hexadecimalToBinary.bind(this.converterUseCase),
            'decimal-to-octal': this.converterUseCase.decimalToOctal.bind(this.converterUseCase),
            'octal-to-decimal': this.converterUseCase.octalToDecimal.bind(this.converterUseCase),
            'octal-to-hexadecimal': this.converterUseCase.octalToHexadecimal.bind(this.converterUseCase),
            'hexadecimal-to-octal': this.converterUseCase.hexadecimalToOctal.bind(this.converterUseCase),
            'octal-to-binary': this.converterUseCase.octalToBinary.bind(this.converterUseCase),
            'binary-to-octal': this.converterUseCase.binaryToOctal.bind(this.converterUseCase),
        };
    }
}
exports.default = ConverterController;
