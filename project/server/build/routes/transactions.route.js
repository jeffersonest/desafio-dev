"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Transactions_controller_1 = __importDefault(require("../controllers/Transactions.controller"));
var TransactionsRoutes = (0, express_1.Router)();
TransactionsRoutes.get("/", Transactions_controller_1.default.index.bind(Transactions_controller_1.default));
exports.default = TransactionsRoutes;
//# sourceMappingURL=transactions.route.js.map