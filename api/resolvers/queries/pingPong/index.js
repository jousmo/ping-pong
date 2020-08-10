"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ping = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _typeGraphql = require("type-graphql");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

var Ping = (_dec = (0, _typeGraphql.Resolver)(), _dec2 = (0, _typeGraphql.Query)(function () {
  return String;
}), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Ping() {
    (0, _classCallCheck2["default"])(this, Ping);
  }

  (0, _createClass2["default"])(Ping, [{
    key: "ping",
    value: function ping() {
      return 'Pooong!';
    }
  }]);
  return Ping;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "ping", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "ping"), _class2.prototype)), _class2)) || _class);
exports.Ping = Ping;