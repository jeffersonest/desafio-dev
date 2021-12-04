"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var transactions_route_1 = __importDefault(require("./transactions.route"));
var routes = (0, express_1.Router)();
routes.use("/transactions", transactions_route_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map