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
exports.Separator = void 0;
var react_1 = require("react");
require("./Separator.scss");
var Separator = function (props) {
    var _a = props.scheme, scheme = _a === void 0 ? "light" : _a, className = props.className, otherProps = __rest(props, ["scheme", "className"]);
    return (<div className={"Separator Separator--m-scheme-".concat(scheme, " ").concat(className)} {...otherProps}></div>);
};
exports.Separator = Separator;
