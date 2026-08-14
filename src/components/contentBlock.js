"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = require("@docusaurus/Link");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var ThemedImage_1 = require("@theme/ThemedImage");
var react_1 = require("react");
function ContentBlock(_a) {
    var title = _a.title, status = _a.status, description = _a.description, linkUrl = _a.linkUrl, imageUrl = _a.imageUrl;
    // const imgUrl = useBaseUrl(imageUrl);
    return (<div className="col-md-4 p-8">
      <Link_1.default to={(0, useBaseUrl_1.default)(linkUrl)} activeClassName="active">
        <div className="show-card">
          <div className="icon-wrapper">
            <ThemedImage_1.default alt={title} className="icon" sources={{
            light: (0, useBaseUrl_1.default)(imageUrl.replace('.svg', '-light.svg')),
            dark: (0, useBaseUrl_1.default)(imageUrl.replace('.svg', '-dark.svg'))
        }}/>
          </div>
          <div className="status">{status}</div>
          <div className="title">{title}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link_1.default>
    </div>);
}
// @ts-ignore
exports.default = ContentBlock;
