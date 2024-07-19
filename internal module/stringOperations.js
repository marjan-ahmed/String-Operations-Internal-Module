"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = exports.toLowerCase = exports.toUpperCase = exports.concatenate = void 0;
function concatenate(str1, str2) {
    return str1 + str2;
}
exports.concatenate = concatenate;
var toUpperCase = function (str) { return str.toUpperCase(); };
exports.toUpperCase = toUpperCase;
var toLowerCase = function (str) { return str.toLowerCase(); };
exports.toLowerCase = toLowerCase;
var reverseString = function (str) { return str.split('').reverse().join(''); };
exports.reverseString = reverseString;
