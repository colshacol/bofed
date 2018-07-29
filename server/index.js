"use strict";

var _microProxy = _interopRequireDefault(require("micro-proxy"));

require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var proxy = (0, _microProxy.default)([{
  pathname: '/foo',
  method: ['GET'],
  dest: 'http://localhost:8001'
}, {
  pathname: '/**',
  dest: 'http://localhost:8999'
}]);
proxy.listen(8000, function (err) {
  if (err) throw err;
  boxlog("".concat(time_stamp(), "> Ready @ http://localhost:8000"));
});
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(proxy, "proxy", "/Users/cocolcleasure/Code/bofed/src/server/index.js");
  leaveModule(module);
})();

;