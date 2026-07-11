"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCol = void 0;
require("./NewCol.scss");
var react_1 = require("react");
var NewCol = function (props) {
    var _a = props.className, className = _a === void 0 ? "" : _a, children = props.children, _b = props.withoutPaddings, withoutPaddings = _b === void 0 ? false : _b, otherProps = __rest(props, ["className", "children", "withoutPaddings"]);
    return (<div className={"NewCol ".concat(className, " ").concat(("withoutPaddings" && Boolean(withoutPaddings)) || "")} {...otherProps}>
      {children}
    </div>);
};
exports.NewCol = NewCol;
