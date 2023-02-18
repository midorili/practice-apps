"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireWildcard(require("react-dom"));
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
var Payment = /*#__PURE__*/function (_Component) {
  _inherits(Payment, _Component);
  var _super = _createSuper(Payment);
  function Payment(props) {
    var _this;
    _classCallCheck(this, Payment);
    _this = _super.call(this, props);
    _this.state = {
      onClickApp: false,
      onClickShipping: false,
      onClickConfirmation: false,
      onClickPayment: true,
      name: _this.props.stateFromShipping.name,
      username: _this.props.stateFromShipping.username,
      password: _this.props.stateFromShipping.password,
      line1: _this.props.stateFromShipping.line1,
      line2: _this.props.stateFromShipping.line2,
      city: _this.props.stateFromShipping.city,
      state: _this.props.stateFromShipping.state,
      zipcode: _this.props.stateFromShipping.zipcode,
      credit: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    };
    _this.hideMe = _this.hideMe.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Payment, [{
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hide-payment")[0];
      toHide.style.display = 'none';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      console.log('props from shipping', this.props.stateFromShipping);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hide-payment"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Payment Details"), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", null, "Credit Card Number"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "credit",
        type: "text",
        value: this.state.credit,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            credit: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Expiry Date"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "expiry",
        type: "text",
        value: this.state.expiry,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            expiry: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "CVV"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "cvv",
        type: "text",
        value: this.state.cvv,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            cvv: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Billing Zip"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "billing-zip",
        type: "text",
        value: this.state.billingZip,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            billingZip: event.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            onClickConfirmation: true,
            onClickPayment: false
          });
          _this2.hideMe();
        }
      }, "Next")), this.state.onClickConfirmation ? /*#__PURE__*/_react["default"].createElement(_Confirmation["default"], {
        stateFromPayment: this.state
      }) : null, this.state.onClickShipping ? /*#__PURE__*/_react["default"].createElement(Shipping, null) : null);
    }
  }]);
  return Payment;
}(_react.Component);
var _default = Payment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYXltZW50IiwicHJvcHMiLCJzdGF0ZSIsIm9uQ2xpY2tBcHAiLCJvbkNsaWNrU2hpcHBpbmciLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwib25DbGlja1BheW1lbnQiLCJuYW1lIiwic3RhdGVGcm9tU2hpcHBpbmciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXBjb2RlIiwiY3JlZGl0IiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhpZGVNZSIsImJpbmQiLCJ0b0hpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi9zcmMvUGF5bWVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29uZmlybWF0aW9uIGZyb20gJy4vQ29uZmlybWF0aW9uLmpzeCdcblxuY2xhc3MgUGF5bWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9uQ2xpY2tBcHA6IGZhbHNlLFxuICAgICAgb25DbGlja1NoaXBwaW5nOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tDb25maXJtYXRpb246IGZhbHNlLFxuICAgICAgb25DbGlja1BheW1lbnQ6IHRydWUsXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVNoaXBwaW5nLm5hbWUsXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21TaGlwcGluZy51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnByb3BzLnN0YXRlRnJvbVNoaXBwaW5nLnBhc3N3b3JkLFxuICAgICAgbGluZTE6IHRoaXMucHJvcHMuc3RhdGVGcm9tU2hpcHBpbmcubGluZTEsXG4gICAgICBsaW5lMjogdGhpcy5wcm9wcy5zdGF0ZUZyb21TaGlwcGluZy5saW5lMixcbiAgICAgIGNpdHk6IHRoaXMucHJvcHMuc3RhdGVGcm9tU2hpcHBpbmcuY2l0eSxcbiAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVNoaXBwaW5nLnN0YXRlLFxuICAgICAgemlwY29kZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21TaGlwcGluZy56aXBjb2RlLFxuICAgICAgY3JlZGl0OiAnJyxcbiAgICAgIGV4cGlyeTogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgYmlsbGluZ1ppcDogJydcbiAgICB9XG4gICAgdGhpcy5oaWRlTWUgPSB0aGlzLmhpZGVNZS5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgaGlkZU1lKCkge1xuICAgIGxldCB0b0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlkZS1wYXltZW50XCIpWzBdXG4gICAgdG9IaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb3BzIGZyb20gc2hpcHBpbmcnLCB0aGlzLnByb3BzLnN0YXRlRnJvbVNoaXBwaW5nKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDwgZGl2IGNsYXNzTmFtZT1cImhpZGUtcGF5bWVudFwiID5cbiAgICAgICAgICA8aDE+UGF5bWVudCBEZXRhaWxzPC9oMT5cbiAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICA8bGFiZWw+Q3JlZGl0IENhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNyZWRpdFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KSB9fT48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsPkV4cGlyeSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImV4cGlyeVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZXhwaXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc2V0U3RhdGUoeyBleHBpcnk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KSB9fT48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjdnZcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmN2dn0gb25DaGFuZ2U9eyhldmVudCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnNldFN0YXRlKHsgY3Z2OiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5CaWxsaW5nIFppcDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJiaWxsaW5nLXppcFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuYmlsbGluZ1ppcH0gb25DaGFuZ2U9eyhldmVudCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnNldFN0YXRlKHsgYmlsbGluZ1ppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pIH19PjwvaW5wdXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgb25DbGlja0NvbmZpcm1hdGlvbjogdHJ1ZSwgb25DbGlja1BheW1lbnQ6IGZhbHNlIH0pOyB0aGlzLmhpZGVNZSgpIH19Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9uQ2xpY2tDb25maXJtYXRpb24gPyA8Q29uZmlybWF0aW9uIHN0YXRlRnJvbVBheW1lbnQ9e3RoaXMuc3RhdGV9IC8+IDogbnVsbH1cbiAgICAgICAge3RoaXMuc3RhdGUub25DbGlja1NoaXBwaW5nID8gPFNoaXBwaW5nIC8+IDogbnVsbH1cbiAgICAgIDwvZGl2ID5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFFdkNBLE9BQU87RUFBQTtFQUFBO0VBQ1gsaUJBQVlDLEtBQUssRUFBRTtJQUFBO0lBQUE7SUFDakIsMEJBQU1BLEtBQUs7SUFFWCxNQUFLQyxLQUFLLEdBQUc7TUFDWEMsVUFBVSxFQUFFLEtBQUs7TUFDakJDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxtQkFBbUIsRUFBRSxLQUFLO01BQzFCQyxjQUFjLEVBQUUsSUFBSTtNQUNwQkMsSUFBSSxFQUFFLE1BQUtOLEtBQUssQ0FBQ08saUJBQWlCLENBQUNELElBQUk7TUFDdkNFLFFBQVEsRUFBRSxNQUFLUixLQUFLLENBQUNPLGlCQUFpQixDQUFDQyxRQUFRO01BQy9DQyxRQUFRLEVBQUUsTUFBS1QsS0FBSyxDQUFDTyxpQkFBaUIsQ0FBQ0UsUUFBUTtNQUMvQ0MsS0FBSyxFQUFFLE1BQUtWLEtBQUssQ0FBQ08saUJBQWlCLENBQUNHLEtBQUs7TUFDekNDLEtBQUssRUFBRSxNQUFLWCxLQUFLLENBQUNPLGlCQUFpQixDQUFDSSxLQUFLO01BQ3pDQyxJQUFJLEVBQUUsTUFBS1osS0FBSyxDQUFD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