"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = require("react");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
require("./index.module.css");
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"Hack-TON-berfest 🎃"} description={"Welcome to Hack-TON-berfest! Join a month-long celebration of open-source projects, their maintainers, and the entire community of contributors! Each October, open source maintainers give new contributors extra attention as they guide developers through their first pull requests."}>
      <div className="bootstrap-wrapper">
        <br />
        <h1 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}>Welcome to Hack-TON-berfest 🎃</h1>
        <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>Choose your path to start journey:</p>

        <div className="container">

          <h1 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}>List of repositories to Contribute 🛠</h1>
          <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>Here is a list of repositories in TON Ecosystem who awaits of contributors right now:</p>

          <iframe className="airtable-embed" src="https://airtable.com/embed/shrVIgLZqTdFtXFaZ?backgroundColor=blue&viewControls=on" frameBorder="0" width="100%" height="533" style={{ background: 'transparent', border: '1px solid #ccc' }}></iframe>

          <br />
          <br />

          <h2 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}>Want to join to this list? 🚀</h2>
          <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>Please, read the page for maintainers and fill the form — <a href={"/contribute/hacktoberfest/as-maintainer"}>join as maintainer</a>. It's easy now!</p>

          <br />
          <br />


          <h1 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}>Claim your NFT as proof of participating 💎</h1>
          <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Every participant (maintainer and contributor) to any of TON Ecosystem projects will receive <b><a href="/contribute/hacktoberfest/#what-the-rewards">Limited Hack-TON-berfest NFT</a></b>:</p>

          <div style={{ width: '100%', textAlign: 'center', margin: '0 auto' }}>
            <video width="300" style={{ width: '100%', borderRadius: '10pt', margin: '30pt auto 20pt' }} muted={true} autoPlay={true} loop={true}>
              <source src="/files/nft-sm.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
            </video>
          </div>

          <br />

          <h1 style={{ fontWeight: '650', textAlign: 'center', padding: '0 10px' }}>FAQ for Contributors</h1>

          <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>Before asking any question in the chats, please read answers here first.</p>
          <iframe className="airtable-embed" src="https://airtable.com/embed/shrmS5ccK1Ez8Zc7q/tbldsJlX5kJoVXV48?backgroundColor=blue&viewControls=on" frameBorder="0" width="100%" height="533" style={{ background: 'transparent', border: '1px solid #ccc' }}></iframe>

          <br />
          <br />
          <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px' }}>If you have any specific questions, feel free to ask in <a href={"https://t.me/TonDev_eng"}>TON Dev Chat</a> to get help.</p>

          <br />
          <br />

        </div>
      </div>


    </Layout_1.default>);
}
