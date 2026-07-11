"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_player_1 = require("react-player");
var Player = function (props) { return (<div className="player-wrapper">
    <react_player_1.default url={props.url} className="react-player" width="100%" height="100%" playing={props.playing} controls={props.controls}/>
  </div>); };
exports.default = Player;
