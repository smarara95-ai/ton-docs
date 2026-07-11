"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionGroups = void 0;
var react_1 = require("react");
var InstructionTable_1 = require("./InstructionTable");
var Tabs_1 = require("@theme/Tabs");
var TabItem_1 = require("@theme/TabItem");
var sections = [
    { label: 'Overview', types: null, value: 'all' },
    { label: 'Stack Manipulation', types: ['stack_basic', 'stack_complex'], value: 'stack' },
    { label: 'Tuple, List and Null', types: ['tuple'], value: 'tuple' },
    { label: 'Constants and Literals', types: ['const_int', 'const_data'], value: 'const' },
    {
        label: 'Arithmetic Operations',
        types: ['arithm_basic', 'arithm_div', 'arithm_logical', 'arithm_quiet'],
        value: 'arithm',
    },
    { label: 'Data Comparison', types: ['compare_int', 'compare_other'], value: 'compare' },
    { label: 'Cell Manipulation', types: ['cell_build', 'cell_parse'], value: 'cell' },
    {
        label: 'Continuation and Control Flow',
        types: ['cont_basic', 'cont_conditional', 'cont_create', 'cont_dict', 'cont_loops', 'cont_registers', 'cont_stack'],
        value: 'cont',
    },
    { label: 'Exception Generation and Handling', types: ['exceptions'], value: 'exception' },
    {
        label: 'Dictionary Manipulation',
        types: ['dict_create', 'dict_serial', 'dict_get', 'dict_set', 'dict_set_builder', 'dict_delete', 'dict_mayberef', 'dict_prefix', 'dict_next', 'dict_min', 'dict_special', 'dict_sub'],
        value: 'dict',
    },
    {
        label: 'Application-specific Primitives',
        types: ['app_gas', 'app_rnd', 'app_config', 'app_global', 'app_crypto', 'app_misc', 'app_currency', 'app_addr', 'app_actions'],
        value: 'app',
    },
    { label: 'Miscellaneous', types: ['debug', 'codepage'], value: 'miscellaneous' },
    { label: 'Aliases', types: null, value: 'alias' },
];
exports.InstructionGroups = react_1.default.memo(function (_a) {
    var instructions = _a.instructions, aliases = _a.aliases, search = _a.search;
    var aliasesWithInstructions = (0, react_1.useMemo)(function () {
        var instructionsByMnemonic = instructions.reduce(function (acc, instruction) {
            acc[instruction.mnemonic] = instruction;
            return acc;
        }, {});
        return aliases.map(function (alias) { return (__assign(__assign({}, alias), { instruction: instructionsByMnemonic[alias.alias_of] })); });
    }, [instructions, aliases]);
    var searchValue = search.toLowerCase();
    var filteredInstructions = (0, react_1.useMemo)(function () { return instructions.filter(function (item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return ((_c = (_b = (_a = item.doc) === null || _a === void 0 ? void 0 : _a.opcode) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes(searchValue)) ||
            ((_f = (_e = (_d = item.doc) === null || _d === void 0 ? void 0 : _d.fift) === null || _e === void 0 ? void 0 : _e.toLowerCase()) === null || _f === void 0 ? void 0 : _f.includes(searchValue)) ||
            ((_j = (_h = (_g = item === null || item === void 0 ? void 0 : item.doc) === null || _g === void 0 ? void 0 : _g.description) === null || _h === void 0 ? void 0 : _h.toLowerCase()) === null || _j === void 0 ? void 0 : _j.includes(searchValue));
    }); }, [instructions, searchValue]);
    var filteredAliases = (0, react_1.useMemo)(function () { return aliasesWithInstructions.filter(function (item) {
        var _a, _b, _c, _d, _e, _f;
        return ((_b = (_a = item.mnemonic) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(searchValue)) ||
            ((_d = (_c = item.description) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === null || _d === void 0 ? void 0 : _d.includes(searchValue)) ||
            ((_f = (_e = item.doc_fift) === null || _e === void 0 ? void 0 : _e.toLowerCase()) === null || _f === void 0 ? void 0 : _f.includes(searchValue));
    }); }, [aliasesWithInstructions, searchValue]);
    var activeTab = (0, react_1.useMemo)(function () {
        if (filteredAliases.length > 0 && filteredInstructions.length === 0) {
            return 'alias';
        }
        return 'all';
    }, [filteredAliases, filteredInstructions]);
    return (<Tabs_1.default key={activeTab} defaultValue={activeTab}>
      {sections.map(function (_a) {
            var label = _a.label, types = _a.types, value = _a.value;
            if (value === 'alias') {
                if (!filteredAliases.length)
                    return null;
                return (<TabItem_1.default label={label} value={value} key={value}>
              <InstructionTable_1.InstructionTable instructions={filteredAliases.map(function (alias) {
                        var _a, _b;
                        return ({
                            opcode: (_a = alias.instruction) === null || _a === void 0 ? void 0 : _a.doc.opcode,
                            fift: alias.doc_fift,
                            gas: (_b = alias.instruction) === null || _b === void 0 ? void 0 : _b.doc.gas,
                            description: alias.description,
                            stack: alias.doc_stack,
                        });
                    })}/>
            </TabItem_1.default>);
            }
            var tabInstructions = types
                ? filteredInstructions.filter(function (inst) { return types.includes(inst.doc.category); })
                : filteredInstructions;
            if (!tabInstructions.length)
                return null;
            return (<TabItem_1.default label={label} value={value} key={value}>
            <InstructionTable_1.InstructionTable instructions={tabInstructions.map(function (inst) { return ({
                    opcode: inst.doc.opcode,
                    fift: inst.doc.fift,
                    gas: inst.doc.gas,
                    description: inst.doc.description,
                    stack: inst.doc.stack,
                }); })}/>
          </TabItem_1.default>);
        })}
    </Tabs_1.default>);
});
