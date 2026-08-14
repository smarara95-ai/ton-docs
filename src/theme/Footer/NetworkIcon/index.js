"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkIcon = void 0;
var react_1 = require("react");
var index_1 = require("../../../assets/icons/index");
var NetworkIcon = function (_a) {
    var type = _a.type;
    switch (type) {
        case "coinmarketcap":
            return <index_1.Icon24CoinMakertCap />;
        case "telegram":
            return <index_1.Icon24TelegramCircle />;
        case "github":
            return <index_1.Icon24GithubCircle />;
        case "twitter":
            return <index_1.Icon24TwitterCircle />;
        case "mail":
            return <index_1.Icon24MailCircle />;
        case "linkedin":
            return <index_1.Icon24LinkedInCircle />;
        default:
            return null;
    }
};
exports.NetworkIcon = NetworkIcon;
