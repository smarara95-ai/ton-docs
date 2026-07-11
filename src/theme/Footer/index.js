"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./Footer.scss");
var NetworkIcon_1 = require("./NetworkIcon");
var Typography_1 = require("./Typography");
var Logo_1 = require("./Logo");
var Separator_1 = require("./Separator");
var config_1 = require("./config");
var GridSystem_1 = require("./GridSystem");
var theme_common_1 = require("@docusaurus/theme-common");
var theme_common_2 = require("@docusaurus/theme-common");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var FooterColumnContent = function (_a) {
    var column = _a.column, scheme = _a.scheme;
    return (<>
      <Typography_1.Text className="CustomFooter__colHeader">{column.headerLangKey}</Typography_1.Text>
      <div className="CustomFooter__colLinks">
        {column.links.map(function (link) { return (<a className="CustomFooter__colLink" href={link.url} key={link.langKey}>
            <Typography_1.Caption scheme={scheme}>{link.langKey}</Typography_1.Caption>
          </a>); })}
      </div>
    </>);
};
var LINKS_ROW_CONFIG = {
    sizeConfig: {
        mobile: 6,
        tabletS: 2.4,
        tabletM: 2.4,
        desktop: 2.4,
    },
    gutterConfig: {
        mobile: 16,
        tabletS: 16,
        tabletM: 16,
        desktop: 32,
    },
};
function Footer() {
    var footer = (0, theme_common_1.useThemeConfig)().footer;
    var colorMode = (0, theme_common_2.useColorMode)().colorMode;
    var _a = (0, react_1.useState)("dark"), style = _a[0], setStyle = _a[1];
    var _b = (0, react_1.useState)((0, config_1.footerLinkExporter)()), FOOTER_COLUMN_LINKS = _b[0], setFOOTER_COLUMN_LINKS = _b[1];
    var _c = (0, useDocusaurusContext_1.default)(), siteConfig = _c.siteConfig, i18n = _c.i18n;
    (0, react_1.useEffect)(function () {
        setFOOTER_COLUMN_LINKS((0, config_1.footerLinkExporter)(i18n.currentLocale));
    }, [i18n.currentLocale]);
    if (!footer) {
        return null;
    }
    (0, react_1.useEffect)(function () {
        var docColorMode = document.documentElement.getAttribute("data-theme");
        if (colorMode !== docColorMode) {
            setStyle(docColorMode);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        setStyle(colorMode);
    }, [colorMode]);
    return (<footer className={"CustomFooter CustomFooter--m-scheme-".concat(style, " bootstrap-wrapper")}>
      <div className="container">
        <div className="CustomFooter__links">
          <GridSystem_1.NewRow sizeConfig={LINKS_ROW_CONFIG.sizeConfig} gutterConfig={LINKS_ROW_CONFIG.gutterConfig}>
            {FOOTER_COLUMN_LINKS.map(function (column) { return (<GridSystem_1.NewCol key={column.headerLangKey}>
                <FooterColumnContent column={column} scheme={style}/>
              </GridSystem_1.NewCol>); })}
          </GridSystem_1.NewRow>
        </div>
        <Separator_1.Separator scheme={style}/>
        <div className="CustomFooter__copyrights">
          <Logo_1.Logo scheme={style}/>
          <div>
            <div className="CustomFooter__networks">
              {config_1.NETWORKS.map(function (network, index) { return (<a key={index} href={network.url} className="CustomFooter__network" target="_blank" rel="noreferrer noopener">
                  <NetworkIcon_1.NetworkIcon type={network.type}/>
                </a>); })}
            </div>
          </div>
        </div>
      </div>
    </footer>);
}
exports.default = Footer;
