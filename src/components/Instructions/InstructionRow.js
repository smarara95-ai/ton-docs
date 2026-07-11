"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionRow = InstructionRow;
var react_1 = require("react");
var markdown_to_jsx_1 = require("markdown-to-jsx");
var InstructionRow_module_css_1 = require("./InstructionRow.module.css");
function InstructionRow(_a) {
    var _b, _c, _d, _e;
    var instruction = _a.instruction;
    return (<tr className={InstructionRow_module_css_1.default.anchorWithStickyNavbar} id={instruction.opcode}>
      <td><code>{(_b = instruction.opcode) !== null && _b !== void 0 ? _b : ''}</code></td>
      <td className={InstructionRow_module_css_1.default.anchorWithStickyNavbar} id={instruction.fift}><code>{instruction.fift}</code></td>
      <td><code>{(_c = instruction.stack) !== null && _c !== void 0 ? _c : ''}</code></td>
      <td><markdown_to_jsx_1.default>{(_d = instruction.description) !== null && _d !== void 0 ? _d : ''}</markdown_to_jsx_1.default></td>
      <td><code>{(_e = instruction.gas) !== null && _e !== void 0 ? _e : ''}</code></td>
    </tr>);
}
