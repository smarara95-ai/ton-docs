"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = require("@docusaurus/Link");
var react_1 = require("react");
var Button = function (props) {
    var classNames = "button button--".concat(props.colorType, " button--").concat(props.sizeType);
    return (<Link_1.default className={classNames} to={props.href}>
      {props.children}
    </Link_1.default>);
};
exports.default = Button;
