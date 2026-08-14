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
exports.default = ZoomableImage;
var react_1 = require("react");
var react_zoom_pan_pinch_1 = require("react-zoom-pan-pinch");
function Controls() {
    var _a = (0, react_zoom_pan_pinch_1.useControls)(), zoomIn = _a.zoomIn, zoomOut = _a.zoomOut, resetTransform = _a.resetTransform;
    return (<div className="tools">
      <button onClick={function () { return zoomIn(); }} aria-label="Zoom in">+</button>
      <button onClick={function () { return zoomOut(); }} aria-label="Zoom out">-</button>
      <button onClick={function () { return resetTransform(); }} aria-label="Reset zoom">×</button>
    </div>);
}
;
function ZoomableImage(_a) {
    var src = _a.src, _b = _a.alt, alt = _b === void 0 ? "SVG" : _b;
    return (<react_zoom_pan_pinch_1.TransformWrapper initialScale={1} initialPositionX={200} initialPositionY={100}>
      {function (_a) {
            var zoomIn = _a.zoomIn, zoomOut = _a.zoomOut, resetTransform = _a.resetTransform, rest = __rest(_a, ["zoomIn", "zoomOut", "resetTransform"]);
            return (<>
          <Controls />
          <react_zoom_pan_pinch_1.TransformComponent>
            <img src={src} alt={alt} style={{ maxWidth: '100%' }}/>
          </react_zoom_pan_pinch_1.TransformComponent>
        </>);
        }}
    </react_zoom_pan_pinch_1.TransformWrapper>);
}
