"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cp0 = exports.miscellaneousOpcodes = exports.tupleOpcodes = exports.stackManipulationOpcodes = exports.exceptionOpcodes = exports.dictionaryManipulationOpcodes = exports.continuationOpcodes = exports.constantOpcodes = exports.comparisonOpcodes = exports.cellManipulationOpcodes = exports.arithmeticOpcodes = exports.appSpecificOpcodes = exports.opcodes = void 0;
var cp0_json_1 = require("../../../3rd/tvm-spec/cp0.json");
exports.cp0 = cp0_json_1.default;
exports.opcodes = cp0_json_1.default;
/* aliases so existing imports don’t crash */
exports.appSpecificOpcodes = exports.opcodes;
exports.arithmeticOpcodes = exports.opcodes;
exports.cellManipulationOpcodes = exports.opcodes;
exports.comparisonOpcodes = exports.opcodes;
exports.constantOpcodes = exports.opcodes;
exports.continuationOpcodes = exports.opcodes;
exports.dictionaryManipulationOpcodes = exports.opcodes;
exports.exceptionOpcodes = exports.opcodes;
exports.stackManipulationOpcodes = exports.opcodes;
exports.tupleOpcodes = exports.opcodes;
exports.miscellaneousOpcodes = exports.opcodes;
