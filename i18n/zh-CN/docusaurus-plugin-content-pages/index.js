"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = require("react");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var features_1 = require("./features");
var contentBlock_1 = require("../../../src/components/contentBlock");
require("./index.module.css");
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"Start"} description={"Learn about the basics of blockchain and TON and how to get started. TON is blockchain of blockchains with a masterchain to rule them all. You can learn more about general architecture in Basic Concepts section."}>
      <div className="bootstrap-wrapper">
        <br />
        <h1 style={{ fontWeight: "650", textAlign: "center", padding: "0 10px" }}>
          <span>
            欢迎来到 <br /> TON区块链文档
          </span>{" "}
          <span className="mobile-view">
            欢迎来到 <br /> TON区块链文档
          </span>
        </h1>
        <p style={{ textAlign: "center", fontWeight: "400", fontSize: "18px" }}>
          选择你的路径开始旅程
        </p>

        <div className="container">
          <div id="Get Started" className="row">
            {features_1.firstRow &&
            features_1.firstRow.length &&
            features_1.firstRow.map(function (props, idx) { return (<contentBlock_1.default key={idx} {...props}/>); })}{" "}
          </div>

          <br />
          <p style={{
            fontWeight: "300",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "16px",
        }}>
            提示：使用<code>Ctrl+K</code>快捷键在任何地方进行搜索
          </p>
        </div>
      </div>
    </Layout_1.default>);
}
