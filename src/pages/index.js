"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = require("react");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var features_1 = require("../data/features");
var contentBlock_1 = require("@site/src/components/contentBlock");
require("./index.module.css");
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"Start"} description={"Explore TON Blockchain fundamentals and get started. You can learn more about the general architecture in Concepts section."}>
      <div className="bootstrap-wrapper">
        <br />
        <h1 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}><span>Welcome to TON <br /> Blockchain documentation </span> <span className='mobile-view'>Welcome to <br /> TON Blockchain <br /> documentation</span></h1>
        <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>Choose your path to start your journey</p>

        <div className="container">

          <div id="get-started" className="row">
            {features_1.firstRow &&
            features_1.firstRow.length &&
            features_1.firstRow.map(function (props, idx) { return (<contentBlock_1.default key={idx} {...props}/>); })}
          </div>

          <br />
          <p style={{ fontWeight: '300', textAlign: 'center', padding: '10px 0', fontSize: '16px' }}>Tip: search everywhere with <code>Ctrl+K</code> (or <code>Cmd+K</code> on macOS) hotkey</p>
        </div>
      </div>
    </Layout_1.default>);
}
