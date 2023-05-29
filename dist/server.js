"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const router_1 = __importDefault(require("./router"));
http_1.default.createServer(router_1.default).listen(8080, () => console.log(`Server running on port 8080`));
