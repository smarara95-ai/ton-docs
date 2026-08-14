"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var tonweb_mnemonic_1 = require("tonweb-mnemonic");
var markdown_to_jsx_1 = require("markdown-to-jsx");
var MnemonicGenerator = function () {
    var _a = (0, react_1.useState)(['s']), mnemonic = _a[0], setMnemonic = _a[1];
    var _b = (0, react_1.useState)(0), mnemonicCount = _b[0], setMnemonicCount = _b[1];
    (0, react_1.useEffect)(function () {
        (0, tonweb_mnemonic_1.generateMnemonic)().then(setMnemonic);
    }, [mnemonicCount]);
    return <>
    <markdown_to_jsx_1.default>**Your mnemonic**:</markdown_to_jsx_1.default>
    <br />
    <code>{mnemonic.join(' ')}</code>
    <br />
    <br />
    <button className="button button--primary button--sm" onClick={function () { return setMnemonicCount(function (oldCount) { return oldCount + 1; }); }}>Regenerate mnemonic
    </button>
  </>;
};
exports.default = MnemonicGenerator;
