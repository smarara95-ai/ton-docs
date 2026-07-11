"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOOTER_COLUMN_LINKS_CN = exports.FOOTER_COLUMN_LINKS_EN = exports.NETWORKS = void 0;
exports.footerLinkExporter = footerLinkExporter;
// social networks
var TON_LINKEDIN_URL = "https://www.linkedin.com/company/ton-blockchain/";
var TONCOIN_TELEGRAM_URL = "https://t.me/toncoin";
var GITHUB_URL = "https://github.com/ton-blockchain";
var TON_TWITTER_URL = "https://twitter.com/ton_blockchain";
var MAIL_TO_URL = "mailto:partnership@ton.org";
var COIN_MARKETCAP_URL = "https://coinmarketcap.com/currencies/toncoin/";
exports.NETWORKS = [
    { type: "linkedin", url: TON_LINKEDIN_URL },
    { type: "telegram", url: TONCOIN_TELEGRAM_URL },
    { type: "github", url: GITHUB_URL },
    { type: "twitter", url: TON_TWITTER_URL },
    { type: "mail", url: MAIL_TO_URL },
    { type: "coinmarketcap", url: COIN_MARKETCAP_URL },
];
// footer links
var PAGE_TONCOIN = "https://ton.org/toncoin";
var PAGE_STAKE = "https://ton.org/stake";
var PAGE_VALIDATOR = "https://ton.org/validator";
var PAGE_MINING = "https://ton.org/mining";
var PAGE_COMMUNITY = "https://ton.org/community";
var PAGE_ROADMAP = "https://ton.org/roadmap";
var PAGE_BRAND_ASSETS = "https://ton.org/brand-assets";
var PAGE_BUY_TONCOIN = "https://ton.org/buy-toncoin";
var PAGE_WALLETS = "https://ton.org/wallets";
var PAGE_DEV = "https://ton.org/dev";
var PAGE_TELEGRAM_MINI_APPS = "https://ton.org/mini-apps";
var PAGE_SUSTAINABILITY = "https://sustainability.ton.org/";
var PAGE_BUILDERS_PORTAL = "https://builders.ton.org";
var PAGE_BRIDGE_URL = "https://ton.org/bridges";
var PAGE_USDT = "https://ton.org/borderless";
var PAGE_ACCEPT_PAYMENT = "https://ton.org/payments";
var PAGE_DECENTRALIZED_NETWORK = "https://ton.org/decentralized-network";
var PAGE_TALENT = "https://ton.org/talents";
var PAGE_GAMEFI = "https://ton.org/gamefi";
var PAGE_MEMECOIN_TOKENS = "https://ton.org/memelandia";
var PAGE_COMMUNITY_TOOLS = "https://ton.org/community-tools";
var PAGE_TON_SITES = "https://ton.org/ton-sites";
var TON_DEV_COMMUNITY_TELEGRAM_URL = "https://t.me/addlist/1r5Vcb8eljk5Yzcy";
var WHITEPAPER_URL = "https://ton.org/whitepaper.pdf";
var TON_DOCUMENTATION_URL = "https://docs.ton.org/";
var APP_AND_DAPPS_URL = "https://t.me/tapps_bot/center?startApp=section_web3-tonorgtma";
var DNS_URL = "https://dns.ton.org/";
var CAREERS_URL = "https://jobs.ton.org/jobs";
var BUG_BOUNTY_URL = "https://github.com/ton-blockchain/bug-bounty";
var TON_FORUM_URL = "https://tonresear.ch";
var TON_CONCEPT_URL = "v3/concepts/dive-into-ton/introduction";
var TONSTAT_URL = "https://www.tonstat.com/";
var TON_BLOG_URL = "https://blog.ton.org";
var FOOTER_APP_AND_DAPPS_URL = APP_AND_DAPPS_URL;
var FOOTER_WHITEPAPER_URL = WHITEPAPER_URL;
var FOOTER_DOCUMENTATION_URL = TON_DOCUMENTATION_URL;
var FOOTER_DEV_COMMUNITY_URL = TON_DEV_COMMUNITY_TELEGRAM_URL;
var FOOTER_BUG_BOUNTY_URL = BUG_BOUNTY_URL;
var FOOTER_TON_FORUM_URL = TON_FORUM_URL;
var FOOTER_BRIDGE_URL = PAGE_BRIDGE_URL;
var FOOTER_CAREERS_URL = CAREERS_URL;
var FOOTER_DNS_URL = DNS_URL;
var FOOTER_TON_CONCEPT_URL = TON_CONCEPT_URL;
exports.FOOTER_COLUMN_LINKS_EN = [
    {
        headerLangKey: "Use",
        links: [
            { langKey: "Get a Wallet", url: PAGE_WALLETS },
            { langKey: "Get Toncoin", url: PAGE_BUY_TONCOIN },
            { langKey: "Stake", url: PAGE_STAKE },
            { langKey: "Accept Payments", url: PAGE_ACCEPT_PAYMENT },
            { langKey: "Apps & Services", url: FOOTER_APP_AND_DAPPS_URL },
            { langKey: "Domains", url: FOOTER_DNS_URL },
            { langKey: "USDT on TON", url: PAGE_USDT },
            { langKey: "Cross-Chain Bridges", url: FOOTER_BRIDGE_URL },
        ],
    },
    {
        headerLangKey: "Learn",
        links: [
            { langKey: "TON Concept", url: FOOTER_TON_CONCEPT_URL }, // it doesn't work, cause we use updated doc URL
            { langKey: "Decentralized Network", url: PAGE_DECENTRALIZED_NETWORK },
            { langKey: "Roadmap", url: PAGE_ROADMAP },
            { langKey: "TonStat", url: TONSTAT_URL },
            { langKey: "History of Mining", url: PAGE_MINING },
            { langKey: "Toncoin", url: PAGE_TONCOIN },
            { langKey: "Validators", url: PAGE_VALIDATOR },
            { langKey: "White Paper", url: FOOTER_WHITEPAPER_URL },
            { langKey: "Brand Assets", url: PAGE_BRAND_ASSETS },
            { langKey: "Sustainability", url: PAGE_SUSTAINABILITY },
        ],
    },
    {
        headerLangKey: "For Builders",
        links: [
            { langKey: "TON Builders Portal", url: PAGE_BUILDERS_PORTAL },
            { langKey: "Getting Started", url: PAGE_DEV },
            { langKey: "Documentation", url: FOOTER_DOCUMENTATION_URL },
            { langKey: "Telegram Mini Apps", url: PAGE_TELEGRAM_MINI_APPS },
            { langKey: "Dev Chats", url: FOOTER_DEV_COMMUNITY_URL },
            { langKey: "Bug Bounty", url: FOOTER_BUG_BOUNTY_URL },
            { langKey: "Find a Job", url: FOOTER_CAREERS_URL },
            { langKey: "Find a Talent", url: PAGE_TALENT },
        ],
    },
    {
        headerLangKey: "Use Cases",
        links: [
            { langKey: "GameFi", url: PAGE_GAMEFI },
            { langKey: "Memecoins & Tokens", url: PAGE_MEMECOIN_TOKENS },
            { langKey: "Community Tools", url: PAGE_COMMUNITY_TOOLS },
            { langKey: "TON Sites", url: PAGE_TON_SITES },
        ],
    },
    {
        headerLangKey: "Community",
        links: [
            { langKey: "Communities", url: PAGE_COMMUNITY },
            { langKey: "Blog", url: TON_BLOG_URL },
            { langKey: "Careers", url: FOOTER_CAREERS_URL },
        ],
    },
];
exports.FOOTER_COLUMN_LINKS_CN = [
    {
        headerLangKey: "使用",
        links: [
            { langKey: "获取钱包", url: PAGE_WALLETS },
            { langKey: "获取或出售 Toncoin", url: PAGE_BUY_TONCOIN },
            { langKey: "质押", url: PAGE_STAKE },
            { langKey: "接受支付", url: PAGE_ACCEPT_PAYMENT },
            { langKey: "应用和服务", url: FOOTER_APP_AND_DAPPS_URL },
            { langKey: "域名", url: FOOTER_DNS_URL },
            { langKey: "TON 上的 USDT", url: PAGE_USDT },
            { langKey: "桥接", url: FOOTER_BRIDGE_URL },
        ],
    },
    {
        headerLangKey: "学习",
        links: [
            { langKey: "TON概念", url: FOOTER_TON_CONCEPT_URL },
            { langKey: "去中心化网络", url: PAGE_DECENTRALIZED_NETWORK },
            { langKey: "路线图", url: PAGE_ROADMAP },
            { langKey: "TonStat", url: TONSTAT_URL },
            { langKey: "挖矿历史", url: PAGE_MINING },
            { langKey: "Toncoin", url: PAGE_TONCOIN },
            { langKey: "验证者", url: PAGE_VALIDATOR },
            { langKey: "白皮书", url: FOOTER_WHITEPAPER_URL },
            { langKey: "品牌资产", url: PAGE_BRAND_ASSETS },
            { langKey: "可持续发展", url: PAGE_SUSTAINABILITY },
        ],
    },
    {
        headerLangKey: "构建",
        links: [
            { langKey: "TON 构建者门户", url: PAGE_BUILDERS_PORTAL },
            { langKey: "入门指南", url: PAGE_DEV },
            { langKey: "文档", url: FOOTER_DOCUMENTATION_URL },
            { langKey: "Telegram 小程序", url: PAGE_TELEGRAM_MINI_APPS },
            { langKey: "开发社区", url: FOOTER_DEV_COMMUNITY_URL },
            { langKey: "漏洞赏金", url: FOOTER_BUG_BOUNTY_URL },
            { langKey: "寻找职位", url: FOOTER_CAREERS_URL },
            { langKey: "寻找人才", url: PAGE_TALENT },
        ],
    },
    {
        headerLangKey: "应用场景",
        links: [
            { langKey: "链游", url: PAGE_GAMEFI },
            { langKey: "迷因币与代币", url: PAGE_MEMECOIN_TOKENS },
            { langKey: "社区工具", url: PAGE_COMMUNITY_TOOLS },
            { langKey: "TON 站点", url: PAGE_TON_SITES },
        ],
    },
    {
        headerLangKey: "社区",
        links: [
            { langKey: "社区", url: PAGE_COMMUNITY },
            { langKey: "博客", url: TON_BLOG_URL },
            { langKey: "职业", url: FOOTER_CAREERS_URL },
        ],
    },
];
function footerLinkExporter(lang) {
    var _a;
    var FOOTER_LINKS_TRANSLATIONS = {
        mandarin: exports.FOOTER_COLUMN_LINKS_CN,
    };
    return ((_a = FOOTER_LINKS_TRANSLATIONS === null || FOOTER_LINKS_TRANSLATIONS === void 0 ? void 0 : FOOTER_LINKS_TRANSLATIONS[lang === null || lang === void 0 ? void 0 : lang.toLowerCase()]) !== null && _a !== void 0 ? _a : exports.FOOTER_COLUMN_LINKS_EN);
}
