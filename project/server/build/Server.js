"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.express.use(routes_1.default);
    }
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=Server.js.map