"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RedirectPage = function (_a) {
    var redirectUrl = _a.redirectUrl;
    // redirect here because current version of docusaurus doesn't support redirect for external links
    (0, react_1.useEffect)(function () {
        window.location.href = redirectUrl;
    }, [redirectUrl]);
    return (<div />);
};
exports.default = RedirectPage;
