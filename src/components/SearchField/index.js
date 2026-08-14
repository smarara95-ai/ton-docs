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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchField = void 0;
var react_1 = require("react");
var SearchField_module_css_1 = require("./SearchField.module.css");
var markdown_to_jsx_1 = require("markdown-to-jsx");
var uniq = function (data) { return Array.from(new Set(data)); };
var SearchField = function (_a) {
    var _b;
    var data = _a.data, searchBy = _a.searchBy, showKeys = _a.showKeys, placeholder = _a.placeholder, ariaLabel = _a["aria-label"], props = __rest(_a, ["data", "searchBy", "showKeys", "placeholder", 'aria-label']);
    var timeout = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = (0, react_1.useState)(inputValue), debouncedValue = _d[0], setDebouncedValue = _d[1];
    var _e = (0, react_1.useState)([]), filteredData = _e[0], setFilteredData = _e[1];
    var handleChange = (0, react_1.useCallback)(function (event) {
        setInputValue(event.target.value);
    }, []);
    var handleKeyUp = (0, react_1.useCallback)(function (event) {
        if (event.key === 'Enter') {
            event.currentTarget.blur();
        }
    }, []);
    (0, react_1.useEffect)(function () {
        timeout.current = setTimeout(function () {
            setDebouncedValue(inputValue);
        }, 500);
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [inputValue]);
    (0, react_1.useEffect)(function () {
        var searchValue = debouncedValue.toLowerCase();
        var dataByKey = data.filter(function (item) { return item[searchBy].toLowerCase().includes(searchValue); });
        var dataByValues = data.filter(function (item) { return JSON.stringify(Object.values(item)).toLowerCase().includes(searchValue); });
        setFilteredData(uniq(__spreadArray(__spreadArray([], dataByKey, true), dataByValues, true)));
    }, [data, debouncedValue, searchBy]);
    (0, react_1.useEffect)(function () { return function () {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }; }, []);
    return (<>
      <input className={SearchField_module_css_1.default.searchField} onChange={handleChange} onKeyUp={handleKeyUp} value={inputValue} type="text" placeholder={placeholder} aria-label={(_b = ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : placeholder) !== null && _b !== void 0 ? _b : 'Search'} {...props}/>

      <table>
        <thead>
          <tr>
            {showKeys.map(function (keyEntity) { return (<th style={{ textAlign: "left" }} key={keyEntity.name}>{keyEntity.name}</th>); })}
          </tr>
        </thead>

        <tbody>
          {debouncedValue.length === 0 && (<tr>
              <td colSpan={showKeys.length}>
                Please enter a search query
              </td>
            </tr>)}

          {filteredData.length === 0 && (<tr>
              <td colSpan={showKeys.length}>
                No results found
              </td>
            </tr>)}

          {filteredData.length !== 0 && filteredData.map(function (item, index) { return (<tr key={index}>
              {showKeys.map(function (keyEntity) {
                var value = item[keyEntity.key];
                return (<td key={keyEntity.name}>
                    {keyEntity.hasMarkdown ? <markdown_to_jsx_1.default>{value}</markdown_to_jsx_1.default> : <code>{value}</code>}
                  </td>);
            })}
            </tr>); })}
        </tbody>
      </table>

    </>);
};
exports.SearchField = SearchField;
