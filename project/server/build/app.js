"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("./Server"));
Server_1.default.listen(3000, function () { return console.log("Running on ".concat(3000)); });
//# sourceMappingURL=app.js.map