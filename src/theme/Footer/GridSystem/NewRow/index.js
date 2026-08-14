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
exports.NewRow = exports.GRID_COLUMNS_COUNT = void 0;
require("./NewRow.scss");
var react_1 = require("react");
exports.GRID_COLUMNS_COUNT = 12;
var NewRow = function (props) {
    var _a = props.gutterConfig, gutterConfig = _a === void 0 ? {
        mobile: 16,
        tabletS: 16,
        tabletM: 16,
        desktop: 40,
        desktopLarge: 40,
    } : _a, _b = props.sizeConfig, sizeConfig = _b === void 0 ? {
        mobile: 12,
        tabletS: 12,
        tabletM: 12,
        desktop: 6,
        desktopLarge: 6,
    } : _b, children = props.children, _c = props.className, className = _c === void 0 ? "" : _c, _d = props.noGutter, noGutter = _d === void 0 ? false : _d, _e = props.gridLayout, gridLayout = _e === void 0 ? "" : _e, _f = props.withoutPaddings, withoutPaddings = _f === void 0 ? false : _f, otherProps = __rest(props, ["gutterConfig", "sizeConfig", "children", "className", "noGutter", "gridLayout", "withoutPaddings"]);
    function getIsSizePrimitiveType(size) {
        if (typeof size === "number") {
            return true;
        }
        return false;
    }
    function getCommonColumnsLayoutGrid(size) {
        return "repeat(auto-fill, calc((100% / ".concat(exports.GRID_COLUMNS_COUNT, ") * ").concat(size, "))");
    }
    function getCustomColumnsLayoutGrid(columns) {
        return columns.map(function (num) { return num + "fr"; }).join(" ");
    }
    var NewRowStyles = (0, react_1.useMemo)(function () {
        var desktopLargeSize = sizeConfig.desktopLarge
            ? sizeConfig.desktopLarge
            : sizeConfig.desktop;
        var desktopLargeGutter = gutterConfig.desktopLarge
            ? gutterConfig.desktopLarge
            : gutterConfig.desktop;
        return {
            "--mobileGridGap": noGutter ? 0 : gutterConfig.mobile,
            "--tabletSGridGap": noGutter ? 0 : gutterConfig.tabletS,
            "--tabletMGridGap": noGutter ? 0 : gutterConfig.tabletM,
            "--desktopGridGap": noGutter ? 0 : gutterConfig.desktop,
            "--desktopLargeGridGap": noGutter ? 0 : desktopLargeGutter,
            "--mobileGridSize": getIsSizePrimitiveType(sizeConfig.mobile)
                ? getCommonColumnsLayoutGrid(sizeConfig.mobile)
                : getCustomColumnsLayoutGrid(sizeConfig.mobile),
            "--tabletSGridSize": getIsSizePrimitiveType(sizeConfig.tabletS)
                ? getCommonColumnsLayoutGrid(sizeConfig.tabletS)
                : getCustomColumnsLayoutGrid(sizeConfig.tabletS),
            "--tabletMGridSize": getIsSizePrimitiveType(sizeConfig.tabletM)
                ? getCommonColumnsLayoutGrid(sizeConfig.tabletM)
                : getCustomColumnsLayoutGrid(sizeConfig.tabletM),
            "--desktopGridSize": getIsSizePrimitiveType(sizeConfig.desktop)
                ? getCommonColumnsLayoutGrid(sizeConfig.desktop)
                : getCustomColumnsLayoutGrid(sizeConfig.desktop),
            "--desktopLargeGridSize": getIsSizePrimitiveType(desktopLargeSize)
                ? getCommonColumnsLayoutGrid(desktopLargeSize)
                : getCustomColumnsLayoutGrid(desktopLargeSize),
        };
    }, [sizeConfig, noGutter, gutterConfig]);
    return (<div className={"NewRow ".concat(className, " ").concat(("NewRow-m-".concat(gridLayout) && Boolean(gridLayout)) || "", " ").concat(("withoutPaddings" && Boolean(withoutPaddings)) || "")} style={NewRowStyles} {...otherProps}>
      {children}
    </div>);
};
exports.NewRow = NewRow;
