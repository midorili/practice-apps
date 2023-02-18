"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireWildcard(require("react-dom"));
var _Payment = _interopRequireDefault(require("./Payment.jsx"));
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
var Shipping = /*#__PURE__*/function (_Component) {
  _inherits(Shipping, _Component);
  var _super = _createSuper(Shipping);
  function Shipping(props) {
    var _this;
    _classCallCheck(this, Shipping);
    _this = _super.call(this, props);
    _this.state = {
      onClickApp: false,
      onClickAccount: false,
      onClickShipping: true,
      onClickPayment: false,
      name: _this.props.stateFromAccount.name,
      username: _this.props.stateFromAccount.username,
      password: _this.props.stateFromAccount.password,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: ''
    };
    _this.hideMe = _this.hideMe.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Shipping, [{
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hyde-again")[0];
      toHide.style.display = 'none';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      console.log('props from account', this.props);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hyde-again"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Shipping"), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", null, "Line 1"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "line1",
        type: "text",
        value: this.state.line1,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            line1: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Line 2"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "line2",
        type: "text",
        value: this.state.line2,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            line2: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "City"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "city",
        type: "text",
        value: this.state.city,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            city: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "State"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "state",
        type: "text",
        value: this.state.state,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            state: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Zipcode"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "zipcode",
        type: "text",
        value: this.state.zipcode,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            zipcode: event.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            onClickPayment: true,
            onClickShipping: false
          });
          _this2.hideMe();
        }
      }, "Next")), this.state.onClickPayment ? /*#__PURE__*/_react["default"].createElement(_Payment["default"], {
        stateFromShipping: this.state
      }) : null, this.state.onClickAccount ? /*#__PURE__*/_react["default"].createElement(Account, null) : null);
    }
  }]);
  return Shipping;
}(_react.Component);
var _default = Shipping;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaGlwcGluZyIsInByb3BzIiwic3RhdGUiLCJvbkNsaWNrQXBwIiwib25DbGlja0FjY291bnQiLCJvbkNsaWNrU2hpcHBpbmciLCJvbkNsaWNrUGF5bWVudCIsIm5hbWUiLCJzdGF0ZUZyb21BY2NvdW50IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwY29kZSIsImhpZGVNZSIsImJpbmQiLCJ0b0hpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi9zcmMvU2hpcHBpbmcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnLi9QYXltZW50LmpzeCc7XG5cbmNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb25DbGlja0FwcDogZmFsc2UsXG4gICAgICBvbkNsaWNrQWNjb3VudDogZmFsc2UsXG4gICAgICBvbkNsaWNrU2hpcHBpbmc6IHRydWUsXG4gICAgICBvbkNsaWNrUGF5bWVudDogZmFsc2UsXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbUFjY291bnQubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbUFjY291bnQudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5wcm9wcy5zdGF0ZUZyb21BY2NvdW50LnBhc3N3b3JkLFxuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhpZGVNZSA9IHRoaXMuaGlkZU1lLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoaWRlTWUoKSB7XG4gICAgbGV0IHRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoeWRlLWFnYWluXCIpWzBdXG4gICAgdG9IaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMgZnJvbSBhY2NvdW50JywgdGhpcy5wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh5ZGUtYWdhaW5cIj5cbiAgICAgICAgICA8aDE+U2hpcHBpbmc8L2gxPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPkxpbmUgMTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsaW5lMVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubGluZTF9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5zZXRTdGF0ZSh7IGxpbmUxOiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5MaW5lIDI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibGluZTJcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmUyfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc2V0U3RhdGUoeyBsaW5lMjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pIH19PjwvaW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWw+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5zZXRTdGF0ZSh7IHN0YXRlOiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5aaXBjb2RlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInppcGNvZGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnppcGNvZGV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5zZXRTdGF0ZSh7IHppcGNvZGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KSB9fT48L2lucHV0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IG9uQ2xpY2tQYXltZW50OiB0cnVlLCBvbkNsaWNrU2hpcHBpbmc6IGZhbHNlIH0pOyB0aGlzLmhpZGVNZSgpIH19Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9uQ2xpY2tQYXltZW50ID8gPFBheW1lbnQgc3RhdGVGcm9tU2hpcHBpbmc9e3RoaXMuc3RhdGV9IC8+IDogbnVsbH1cbiAgICAgICAge3RoaXMuc3RhdGUub25DbGlja0FjY291bnQgPyA8QWNjb3VudCAvPiA6IG51bGx9XG5cbiAgICAgIDwvZGl2ID5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmc7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRTlCQSxRQUFRO0VBQUE7RUFBQTtFQUNaLGtCQUFZQyxLQUFLLEVBQUU7SUFBQTtJQUFBO0lBQ2pCLDBCQUFNQSxLQUFLO0lBRVgsTUFBS0MsS0FBSyxHQUFHO01BQ1hDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsZUFBZSxFQUFFLElBQUk7TUFDckJDLGNBQWMsRUFBRSxLQUFLO01BQ3JCQyxJQUFJLEVBQUUsTUFBS04sS0FBSyxDQUFDTyxnQkFBZ0IsQ0FBQ0QsSUFBSTtNQUN0Q0UsUUFBUSxFQUFFLE1BQUtSLEtBQUssQ0FBQ08sZ0JBQWdCLENBQUNDLFFBQVE7TUFDOUNDLFFBQVEsRUFBRSxNQUFLVCxLQUFLLENBQUNPLGdCQUFnQixDQUFDRSxRQUFRO01BQzlDQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxJQUFJLEVBQUUsRUFBRTtNQUNSWCxLQUFLLEVBQUUsRUFBRTtNQUNUWSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0QsTUFBS0MsTUFBTSxHQUFHLE1BQUtBLE1BQU0sQ0FBQ0MsSUFBSSwrQkFBTTtJQUFDO0VBRXZDO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsa0JBQVM7TUFDUCxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdERixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsT0FB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