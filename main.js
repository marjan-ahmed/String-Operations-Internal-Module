"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringOperations_1 = require("./internal module/stringOperations");
function main() {
    console.log((0, stringOperations_1.concatenate)("Hello", "World"));
    console.log((0, stringOperations_1.toUpperCase)("marjan"));
    console.log((0, stringOperations_1.toLowerCase)("MARJAN"));
    console.log((0, stringOperations_1.reverseString)("marjan"));
}
exports.default = main;
