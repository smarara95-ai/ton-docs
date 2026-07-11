"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var react_1 = require("react");
function ConceptImage(_a) {
    var src = _a.src, style = _a.style;
    var imgUrl = src;
    var imgStyle = style;
    if (imgStyle === undefined) {
        imgStyle = { maxWidth: '80%', textAlign: 'center', margin: '10pt auto', display: 'block' };
    }
    if (src.indexOf('http') === -1)
        imgUrl = (0, useBaseUrl_1.default)(src);
    return (<img style={imgStyle} src={imgUrl} alt={'concept image'}/>);
}
// @ts-ignore
exports.default = ConceptImage;
