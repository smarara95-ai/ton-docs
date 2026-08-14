"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var Button_module_css_1 = require("./Button.module.css");
var react_tooltip_1 = require("react-tooltip");
var tooltipFadeoutTimeMs = 3500;
function Button(_a) {
    var children = _a.children, event = _a.event, isDisabled = _a.isDisabled, setIsDisabled = _a.setIsDisabled;
    var location = (0, router_1.useLocation)();
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var _b = react_1.default.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleClick = function () {
        setIsOpen(true);
        setIsDisabled(true);
        var eventType = "docs-".concat(event);
        if (window.gtag) {
            window.gtag("event", eventType, {
                event_category: "Feedback",
                event_label: location.pathname,
            });
        }
        var key = "user-feedback:".concat(location.pathname);
        localStorage.setItem(key, "true");
        setTimeout(function () { return setIsOpen(false); }, tooltipFadeoutTimeMs);
    };
    return (<>
      <button data-tooltip-id={"btn-".concat(event)} aria-label={"page-".concat(event, "-button")} className={"".concat(Button_module_css_1.default.button, " ").concat(isDisabled && Button_module_css_1.default.disabled)} onClick={handleClick} disabled={isDisabled}>
        {children}
      </button>
      <react_tooltip_1.Tooltip id={"btn-".concat(event)} 
    // this component doesn"t allow to set styles via className 
    style={{
            width: "200px",
            height: "80px",
            padding: "12px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "18px",
            backgroundColor: colorMode === "dark" ? "#232328" : undefined,
            color: colorMode === "dark" ? "#FFF" : undefined,
        }} border="1px solid rgba(118, 152, 187, 0.35)" openOnClick={true} isOpen={isOpen} variant="light" content="Thank you! Your answer helps us make the docs better."/>
    </>);
}
exports.default = Button;
