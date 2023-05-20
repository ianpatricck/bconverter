import ConverterController from "./ConverterController";
import ConverterUseCase from './ConverterUseCase';

const converterUseCase = new ConverterUseCase();
const converterController = new ConverterController(converterUseCase);

export {
  converterUseCase as converter,
  converterController
};
