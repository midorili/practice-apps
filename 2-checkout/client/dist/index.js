"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireWildcard(require("react-dom"));
var _Account = _interopRequireDefault(require("./Account.jsx"));
var _Shipping = _interopRequireDefault(require("./Shipping.jsx"));
var _Payment = _interopRequireDefault(require("./Payment.jsx"));
var _Added = _interopRequireDefault(require("./Added.jpg"));
var _Confirmation = _interopRequireDefault(require("./Confirmation.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _super.call(this, props);
    _this.state = {
      onClickApp: true,
      onClickAccount: false,
      onClickShipping: false,
      onClickPayment: false,
      onClickConfirmation: false,
      name: '',
      username: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      credit: '',
      cvv: '',
      expiry: '',
      billingZip: ''
    };
    _this.hideMe = _this.hideMe.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(App, [{
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hide-me")[0];
      toHide.style.display = 'none';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hide-me"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _Added["default"]
      }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("code", null, "Page Cookie: ", JSON.stringify(document.cookie, undefined, "\t"))), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            onClickAccount: true,
            onClickApp: false
          });
          _this2.hideMe();
        }
      }, "Checkout")), this.state.onClickAccount ? /*#__PURE__*/_react["default"].createElement(_Account["default"], {
        accountState: this.state.onClickAccount
      }) : null);
    }
  }]);
  return App;
}(_react.Component);
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));
var _default = App; // <Account
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// name={this.state.name}
// username={this.state.username}
// password={this.state.password}
// />
// <Shipping
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// line1={this.state.line1}
// line2={this.state.line2}
// city={this.state.city}
// state={this.state.state}
// zipcode={this.state.zipcode}
// />
// <Payment
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// credit={this.state.credit}
// cvv={this.state.cvv}
// expiry={this.state.expiry}
// billingZip={this.state.billingZip}
// />
// next() {
//   let currentForm = this.state.currentForm;
//   currentForm = currentForm >= 2 ? 3 : currentForm + 1
//   this.setState({
//     currentForm: currentForm
//   })
// }
// back() {
//   let currentForm = this.state.currentForm;
//   currentForm = currentForm <= 1 ? 1 : currentForm + 1
//   this.setState({
//     currentForm: currentForm
//   })
// }
// nextButton() {
//   let currentForm = this.state.currentForm;
//   if (currentForm !== 1) {
//     return (
//       <button type="button" onClick={this.next}>Next</button>
//     )
//   }
//   return null;
// }
// backButton() {
//   let currentForm = this.state.currentForm;
//   if (currentForm < 3) {
//     return (
//       <button type="button" onClick={this.back}>Back</button>
//     )
//   }
//   return null;
// }
// handleChange = (event) => {
//   //forEach and map for more than one name/value pair
//   const name = event.target.name;
//   const value = event.target.value
//   this.setState({
//     name: value
//   })
// }
// handleSubmit = (event) => {
//   event.preventDefault()
//   const email = this.state.email;
//   const username = this.state.username;
//   const password = this.state.password;
//   const line1 = this.state.line1
//   const line2 = this.state.line2
//   const city = this.state.city
//   const state = this.state.state
//   const zipcode = this.state.zipcode
//   const credit = this.state.credit
//   const cvv = this.state.cvv
//   const expiry = this.state.expiry
//   const billingZip = this.state.billingZip
//   console.log('submitted')
// }
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwib25DbGlja0FwcCIsIm9uQ2xpY2tBY2NvdW50Iiwib25DbGlja1NoaXBwaW5nIiwib25DbGlja1BheW1lbnQiLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwibmFtZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcGNvZGUiLCJjcmVkaXQiLCJjdnYiLCJleHBpcnkiLCJiaWxsaW5nWmlwIiwiaGlkZU1lIiwiYmluZCIsInRvSGlkZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsIkFkZGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvb2tpZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQuanN4JztcbmltcG9ydCBTaGlwcGluZyBmcm9tICcuL1NoaXBwaW5nLmpzeCc7XG5pbXBvcnQgUGF5bWVudCBmcm9tICcuL1BheW1lbnQuanN4JztcbmltcG9ydCBBZGRlZCBmcm9tICcuL0FkZGVkLmpwZydcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSAnLi9Db25maXJtYXRpb24uanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb25DbGlja0FwcDogdHJ1ZSxcbiAgICAgIG9uQ2xpY2tBY2NvdW50OiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tTaGlwcGluZzogZmFsc2UsXG4gICAgICBvbkNsaWNrUGF5bWVudDogZmFsc2UsXG4gICAgICBvbkNsaWNrQ29uZmlybWF0aW9uOiBmYWxzZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJyxcbiAgICAgIGNyZWRpdDogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgZXhwaXJ5OiAnJyxcbiAgICAgIGJpbGxpbmdaaXA6ICcnXG4gICAgfVxuICAgIHRoaXMuaGlkZU1lID0gdGhpcy5oaWRlTWUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgaGlkZU1lKCkge1xuICAgIGxldCB0b0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlkZS1tZVwiKVswXVxuICAgIHRvSGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtbWVcIj5cbiAgICAgICAgICA8aW1nIHNyYz17QWRkZWR9IC8+XG4gICAgICAgICAgPHAgPlxuICAgICAgICAgICAgPGNvZGUgPlBhZ2UgQ29va2llOiB7SlNPTi5zdHJpbmdpZnkoZG9jdW1lbnQuY29va2llLCB1bmRlZmluZWQsIFwiXFx0XCIpfTwvY29kZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBvbkNsaWNrQWNjb3VudDogdHJ1ZSwgb25DbGlja0FwcDogZmFsc2UgfSk7IHRoaXMuaGlkZU1lKCkgfX0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXYgPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLm9uQ2xpY2tBY2NvdW50ID8gPEFjY291bnQgYWNjb3VudFN0YXRlPXt0aGlzLnN0YXRlLm9uQ2xpY2tBY2NvdW50fSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIDxBY2NvdW50XG4vLyBjdXJyZW50Rm9ybT17dGhpcy5zdGF0ZS5jdXJyZW50Rm9ybX1cbi8vIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4vLyBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9XG4vLyB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbi8vIHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuLy8gLz5cbi8vIDxTaGlwcGluZ1xuLy8gY3VycmVudEZvcm09e3RoaXMuc3RhdGUuY3VycmVudEZvcm19XG4vLyBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuLy8gbGluZTE9e3RoaXMuc3RhdGUubGluZTF9XG4vLyBsaW5lMj17dGhpcy5zdGF0ZS5saW5lMn1cbi8vIGNpdHk9e3RoaXMuc3RhdGUuY2l0eX1cbi8vIHN0YXRlPXt0aGlzLnN0YXRlLnN0YXRlfVxuLy8gemlwY29kZT17dGhpcy5zdGF0ZS56aXBjb2RlfVxuLy8gLz5cbi8vIDxQYXltZW50XG4vLyBjdXJyZW50Rm9ybT17dGhpcy5zdGF0ZS5jdXJyZW50Rm9ybX1cbi8vIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4vLyBjcmVkaXQ9e3RoaXMuc3RhdGUuY3JlZGl0fVxuLy8gY3Z2PXt0aGlzLnN0YXRlLmN2dn1cbi8vIGV4cGlyeT17dGhpcy5zdGF0ZS5leHBpcnl9XG4vLyBiaWxsaW5nWmlwPXt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9XG5cbi8vIC8+XG5cbiAgLy8gbmV4dCgpIHtcbiAgLy8gICBsZXQgY3VycmVudEZvcm0gPSB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtO1xuICAvLyAgIGN1cnJlbnRGb3JtID0gY3VycmVudEZvcm0gPj0gMiA/IDMgOiBjdXJyZW50Rm9ybSArIDFcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIGN1cnJlbnRGb3JtOiBjdXJyZW50Rm9ybVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyBiYWNrKCkge1xuICAvLyAgIGxldCBjdXJyZW50Rm9ybSA9IHRoaXMuc3RhdGUuY3VycmVudEZvcm07XG4gIC8vICAgY3VycmVudEZvcm0gPSBjdXJyZW50Rm9ybSA8PSAxID8gMSA6IGN1cnJlbnRGb3JtICsgMVxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgY3VycmVudEZvcm06IGN1cnJlbnRGb3JtXG4gIC8vICAgfSlcbiAgLy8gfVxuICAvLyBuZXh0QnV0dG9uKCkge1xuICAvLyAgIGxldCBjdXJyZW50Rm9ybSA9IHRoaXMuc3RhdGUuY3VycmVudEZvcm07XG4gIC8vICAgaWYgKGN1cnJlbnRGb3JtICE9PSAxKSB7XG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm5leHR9Pk5leHQ8L2J1dHRvbj5cbiAgLy8gICAgIClcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICAvLyBiYWNrQnV0dG9uKCkge1xuICAvLyAgIGxldCBjdXJyZW50Rm9ybSA9IHRoaXMuc3RhdGUuY3VycmVudEZvcm07XG4gIC8vICAgaWYgKGN1cnJlbnRGb3JtIDwgMykge1xuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5iYWNrfT5CYWNrPC9idXR0b24+XG4gIC8vICAgICApXG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBudWxsO1xuICAvLyB9XG5cbiAgLy8gaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gIC8vICAgLy9mb3JFYWNoIGFuZCBtYXAgZm9yIG1vcmUgdGhhbiBvbmUgbmFtZS92YWx1ZSBwYWlyXG4gIC8vICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAvLyAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBuYW1lOiB2YWx1ZVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgY29uc3QgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xuICAvLyAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZTtcbiAgLy8gICBjb25zdCBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQ7XG4gIC8vICAgY29uc3QgbGluZTEgPSB0aGlzLnN0YXRlLmxpbmUxXG4gIC8vICAgY29uc3QgbGluZTIgPSB0aGlzLnN0YXRlLmxpbmUyXG4gIC8vICAgY29uc3QgY2l0eSA9IHRoaXMuc3RhdGUuY2l0eVxuICAvLyAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZS5zdGF0ZVxuICAvLyAgIGNvbnN0IHppcGNvZGUgPSB0aGlzLnN0YXRlLnppcGNvZGVcbiAgLy8gICBjb25zdCBjcmVkaXQgPSB0aGlzLnN0YXRlLmNyZWRpdFxuICAvLyAgIGNvbnN0IGN2diA9IHRoaXMuc3RhdGUuY3Z2XG4gIC8vICAgY29uc3QgZXhwaXJ5ID0gdGhpcy5zdGF0ZS5leHBpcnlcbiAgLy8gICBjb25zdCBiaWxsaW5nWmlwID0gdGhpcy5zdGF0ZS5iaWxsaW5nWmlwXG4gIC8vICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpXG4gIC8vIH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7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