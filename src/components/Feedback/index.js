"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var icons_1 = require("../../assets/icons");
var index_module_css_1 = require("./index.module.css");
var Button_1 = require("./Button");
function Feedback() {
    var location = (0, router_1.useLocation)();
    var _a = react_1.default.useState(false), isFeedbackDisabled = _a[0], setIsFeedbackDisabled = _a[1];
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var opacity = isFeedbackDisabled ? 0.56 : 1.0;
    react_1.default.useEffect(function () {
        var key = "user-feedback:".concat(location.pathname);
        var alreadyClicked = localStorage.getItem(key);
        if (alreadyClicked === "true") {
            setIsFeedbackDisabled(true);
        }
    }, [setIsFeedbackDisabled, location.pathname]);
    return (<div className={index_module_css_1.default.container}>
      <span className={index_module_css_1.default.label}>Was this article useful?</span>
      <div className={index_module_css_1.default.buttons}>
        <Button_1.default event="like" isDisabled={isFeedbackDisabled} setIsDisabled={setIsFeedbackDisabled}>
          {colorMode === "light" ?
            <icons_1.IconLikeLight style={{ opacity: opacity }}/> :
            <icons_1.IconLikeDark style={{ opacity: opacity }}/>}
          <span className={index_module_css_1.default.text}>Yes</span>
        </Button_1.default>
        <Button_1.default event="dislike" isDisabled={isFeedbackDisabled} setIsDisabled={setIsFeedbackDisabled}>
          {colorMode === "light" ?
            <icons_1.IconDislikeLight style={{ opacity: opacity }}/> :
            <icons_1.IconDislikeDark style={{ opacity: opacity }}/>}
          <span className={index_module_css_1.default.text}>No</span>
        </Button_1.default>
      </div>
    </div>);
}
exports.default = Feedback;
