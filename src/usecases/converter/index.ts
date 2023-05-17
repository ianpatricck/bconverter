import ConverterController from "./ConverterController";
import ConverterUseCase from './ConverterUseCase';

const converterController = new ConverterController(new ConverterUseCase());

export { converterController };
