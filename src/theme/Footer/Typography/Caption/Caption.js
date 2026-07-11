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
exports.Caption = void 0;
var react_1 = require("react");
require("./Caption.scss");
var Caption = function (props) {
    var children = props.children, _a = props.scheme, scheme = _a === void 0 ? "light" : _a, restProps = __rest(props, ["children", "scheme"]);
    return (<div className={"Caption Caption--weight-medium Caption--scheme-".concat(scheme, " Caption--color-tertiary")} {...restProps}>
      {children}
    </div>);
};
exports.Caption = Caption;
