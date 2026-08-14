"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
var react_1 = require("react");
require("./Logo.scss");
var index_1 = require("../../../assets/icons/index");
var Logo = function (_a) {
    var scheme = _a.scheme;
    return (<a className={"Logo Logo--".concat(scheme)} href="/">
      <div className="Logo__inner Logo__inner--large">
        <index_1.IconLogo />
      </div>
      <div className="Logo__inner Logo__inner--small">
        <index_1.IconLogoSmall />
      </div>
    </a>);
};
exports.Logo = Logo;
