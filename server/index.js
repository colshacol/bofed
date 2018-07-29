"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _koa = _interopRequireDefault(require("koa"));

var _http = _interopRequireDefault(require("http"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var logger = function logger(options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(context, next) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("".concat((0, _dayjs.default)().format('hh:MMa'), " \u221E new request: ").concat(context.path));
                _context.next = 3;
                return next();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var listen = function listen(server, port) {
  server.listen(port, function (err) {
    if (err) throw new Error(err);
    console.log("Listening on port: https://localhost:".concat(port, "/"));
  });
};

exports.listen = listen;

var main =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var app;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new _koa.default();
            app.use(logger());
            listen(_http.default.createServer(app.callback()), 4001);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function main() {
    return _ref2.apply(this, arguments);
  };
}();

main();
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logger, "logger", "/Users/cocolcleasure/Code/bofed/src/server/index.js");
  reactHotLoader.register(listen, "listen", "/Users/cocolcleasure/Code/bofed/src/server/index.js");
  reactHotLoader.register(main, "main", "/Users/cocolcleasure/Code/bofed/src/server/index.js");
  leaveModule(module);
})();

;