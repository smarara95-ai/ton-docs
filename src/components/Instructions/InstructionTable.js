"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionTable = InstructionTable;
var react_1 = require("react");
var InstructionHead_1 = require("./InstructionHead");
var InstructionRow_1 = require("./InstructionRow");
function InstructionTable(_a) {
    var instructions = _a.instructions;
    return (<table>
      <thead>
        <InstructionHead_1.InstructionHead />
      </thead>
      <tbody>
        {instructions.map(function (instruction) { return <InstructionRow_1.InstructionRow instruction={instruction} key={instruction.opcode + instruction.fift}/>; })}
      </tbody>
    </table>);
}
