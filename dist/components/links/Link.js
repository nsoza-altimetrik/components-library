"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LinkModule = _interopRequireDefault(require("./Link.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Link = _ref => {
  let {
    text,
    to
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: to,
    className: _LinkModule.default.link
  }, " ", text));
};

var _default = Link;
exports.default = _default;