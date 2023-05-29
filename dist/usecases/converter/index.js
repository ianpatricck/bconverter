"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterController = exports.converter = void 0;
const ConverterController_1 = __importDefault(require("./ConverterController"));
const ConverterUseCase_1 = __importDefault(require("./ConverterUseCase"));
const converterUseCase = new ConverterUseCase_1.default();
exports.converter = converterUseCase;
const converterController = new ConverterController_1.default(converterUseCase);
exports.converterController = converterController;
