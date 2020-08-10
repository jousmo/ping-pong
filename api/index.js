"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeGraphql = require("type-graphql");

var _apolloServer = require("apollo-server");

var resolvers = _interopRequireWildcard(require("./resolvers"));

require("dotenv").config();

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var PORT, schema, server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PORT = process.env.PORT_APP;
            _context.next = 3;
            return (0, _typeGraphql.buildSchema)({
              resolvers: Object.values(resolvers)
            })["catch"](function (e) {
              return console.err(e);
            });

          case 3:
            schema = _context.sent;
            server = new _apolloServer.ApolloServer({
              schema: schema
            });
            _context.next = 7;
            return server.listen({
              port: PORT
            }, function () {
              return console.log("Server is running on port ".concat(PORT));
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();