"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    text,
    primary
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "".concat(primary ? _ButtonModule.default.primary : _ButtonModule.default.secondary)
  }, text));
};

var _default = Button;
exports.default = _default;