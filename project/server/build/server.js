"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.start = function (port) {
        var App = express_1.application;
        App.listen(port, function () { return console.log("Application started on port: ".concat(port)); });
    };
    return Server;
}());
exports.default = new Server();
//# sourceMappingURL=server.js.map