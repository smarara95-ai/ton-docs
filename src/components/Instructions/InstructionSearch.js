"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionSearch = InstructionSearch;
var react_1 = require("react");
var InstructionSearch_module_css_1 = require("./InstructionSearch.module.css");
var hooks_1 = require("@site/src/hooks");
var InstructionGroups_1 = require("./InstructionGroups");
function InstructionSearch(_a) {
    var instructions = _a.instructions, aliases = _a.aliases;
    var _b = (0, react_1.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    var debouncedValue = (0, hooks_1.useDebounce)(inputValue, 500);
    var handleChange = (0, react_1.useCallback)(function (event) {
        setInputValue(event.target.value);
    }, []);
    var handleKeyUp = (0, react_1.useCallback)(function (event) {
        if (event.key === 'Enter') {
            event.currentTarget.blur();
        }
    }, []);
    return (<div style={{ margin: '0 calc((105% - 100vw)/2)' }}>
      <input className={InstructionSearch_module_css_1.default.searchField} onChange={handleChange} onKeyUp={handleKeyUp} value={inputValue} type="text" placeholder={'Search'} aria-label="Search instructions"/>
      <InstructionGroups_1.InstructionGroups instructions={instructions} aliases={aliases !== null && aliases !== void 0 ? aliases : []} search={debouncedValue}/>
    </div>);
}
