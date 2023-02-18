"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireWildcard(require("react-dom"));
var _index = _interopRequireDefault(require("./index.jsx"));
var _jquery = _interopRequireDefault(require("jquery"));
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
var Confirmation = /*#__PURE__*/function (_Component) {
  _inherits(Confirmation, _Component);
  var _super = _createSuper(Confirmation);
  function Confirmation(props) {
    var _this;
    _classCallCheck(this, Confirmation);
    _this = _super.call(this, props);
    _this.state = {
      onClickApp: false,
      onClickAccount: false,
      onClickShipping: false,
      onClickPayment: false,
      onClickConfirmation: true,
      name: _this.props.stateFromPayment ? _this.props.stateFromPayment.name : _this.props.stateApp.name,
      username: _this.props.stateFromPayment ? _this.props.stateFromPayment.username : _this.props.stateApp.payment,
      password: _this.props.stateFromPayment ? _this.props.stateFromPayment.password : _this.props.stateApp.password,
      line1: _this.props.stateFromPayment ? _this.props.stateFromPayment.line1 : _this.props.stateApp.line1,
      line2: _this.props.stateFromPayment ? _this.props.stateFromPayment.line2 : _this.props.stateApp.line2,
      city: _this.props.stateFromPayment ? _this.props.stateFromPayment.city : _this.props.stateApp.city,
      state: _this.props.stateFromPayment ? _this.props.stateFromPayment.state : _this.props.stateApp.state,
      zipcode: _this.props.stateFromPayment ? _this.props.stateFromPayment.zipcode : _this.props.stateApp.zipcode,
      credit: _this.props.stateFromPayment ? _this.props.stateFromPayment.credit : _this.props.stateApp.credit,
      expiry: _this.props.stateFromPayment ? _this.props.stateFromPayment.expiry : _this.props.stateApp.expiry,
      cvv: _this.props.stateFromPayment ? _this.props.stateFromPayment.cvv : _this.props.stateApp.cvv,
      billingZip: _this.props.stateFromPayment ? _this.props.stateFromPayment.billingZip : _this.props.stateApp.billingZip
      // name: '',
      // username: '',
      // password: '',
      // line1: '',
      // line2: '',
      // city: '',
      // state: '',
      // zipcode: '',
      // credit: '',
      // expiry: '',
      // cvv: '',
      // billingZip: ''
    };

    _this.hideMe = _this.hideMe.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Confirmation, [{
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hide-confirmation")[0];
      toHide.style.display = 'none';
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      _jquery["default"].ajax({
        url: 'http://localhost:3000/purchase',
        method: "POST",
        data: {
          name: this.props.stateFromPayment.name,
          username: this.props.stateFromPayment.username,
          password: this.props.stateFromPayment.password,
          line1: this.props.stateFromPayment.line1,
          line2: this.props.stateFromPayment.line2,
          city: this.props.stateFromPayment.city,
          state: this.props.stateFromPayment.state,
          zipcode: this.props.stateFromPayment.zipcode,
          credit: this.props.stateFromPayment.credit,
          expiry: this.props.stateFromPayment.expiry,
          cvv: this.props.stateFromPayment.cvv,
          billingZip: this.props.stateFromPayment.billingZip
        },
        success: function success() {
          console.log('success from post');
        },
        error: function error() {
          console.log('error from post');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      console.log('props from confirmation', this.props);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hide-confirmation"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Confirmation"), /*#__PURE__*/_react["default"].createElement("div", null, "Name: ", this.state.name), /*#__PURE__*/_react["default"].createElement("div", null, "Email:", this.state.username), /*#__PURE__*/_react["default"].createElement("div", null, "Address:", this.state.line1), /*#__PURE__*/_react["default"].createElement("div", null, "City:", this.state.city), /*#__PURE__*/_react["default"].createElement("div", null, "State:", this.state.state), /*#__PURE__*/_react["default"].createElement("div", null, "Zipcode:", this.state.zipcode), /*#__PURE__*/_react["default"].createElement("div", null, "Credit:", this.state.credit), /*#__PURE__*/_react["default"].createElement("div", null, "CVV:", this.state.cvv), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            onClickApp: true,
            onClickConfirmation: false
          });
          _this2.hideMe();
          _this2.handleSubmit();
        }
      }, "Purchase")), this.state.onClickApp ? /*#__PURE__*/_react["default"].createElement(_index["default"], {
        stateFromConfirmation: this.state
      }) : null, this.state.onClickPayment ? /*#__PURE__*/_react["default"].createElement(Payment, null) : null);
    }
  }]);
  return Confirmation;
}(_react.Component);
var _default = Confirmation;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJwcm9wcyIsInN0YXRlIiwib25DbGlja0FwcCIsIm9uQ2xpY2tBY2NvdW50Iiwib25DbGlja1NoaXBwaW5nIiwib25DbGlja1BheW1lbnQiLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwibmFtZSIsInN0YXRlRnJvbVBheW1lbnQiLCJzdGF0ZUFwcCIsInVzZXJuYW1lIiwicGF5bWVudCIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXBjb2RlIiwiY3JlZGl0IiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhpZGVNZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJ0b0hpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi9zcmMvQ29uZmlybWF0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleC5qc3gnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9uQ2xpY2tBcHA6IGZhbHNlLFxuICAgICAgb25DbGlja0FjY291bnQ6IGZhbHNlLFxuICAgICAgb25DbGlja1NoaXBwaW5nOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tQYXltZW50OiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tDb25maXJtYXRpb246IHRydWUsXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubmFtZSA6IHRoaXMucHJvcHMuc3RhdGVBcHAubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQudXNlcm5hbWUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnBheW1lbnQsXG4gICAgICBwYXNzd29yZDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnBhc3N3b3JkIDogdGhpcy5wcm9wcy5zdGF0ZUFwcC5wYXNzd29yZCxcbiAgICAgIGxpbmUxOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubGluZTEgOiB0aGlzLnByb3BzLnN0YXRlQXBwLmxpbmUxLFxuICAgICAgbGluZTI6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudCA/IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5saW5lMiA6IHRoaXMucHJvcHMuc3RhdGVBcHAubGluZTIsXG4gICAgICBjaXR5OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY2l0eSA6IHRoaXMucHJvcHMuc3RhdGVBcHAuY2l0eSxcbiAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuc3RhdGUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnN0YXRlLFxuICAgICAgemlwY29kZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnppcGNvZGUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnppcGNvZGUsXG4gICAgICBjcmVkaXQ6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudCA/IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5jcmVkaXQgOiB0aGlzLnByb3BzLnN0YXRlQXBwLmNyZWRpdCxcbiAgICAgIGV4cGlyeTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmV4cGlyeSA6IHRoaXMucHJvcHMuc3RhdGVBcHAuZXhwaXJ5LFxuICAgICAgY3Z2OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY3Z2IDogdGhpcy5wcm9wcy5zdGF0ZUFwcC5jdnYsXG4gICAgICBiaWxsaW5nWmlwOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuYmlsbGluZ1ppcCA6IHRoaXMucHJvcHMuc3RhdGVBcHAuYmlsbGluZ1ppcFxuICAgICAgLy8gbmFtZTogJycsXG4gICAgICAvLyB1c2VybmFtZTogJycsXG4gICAgICAvLyBwYXNzd29yZDogJycsXG4gICAgICAvLyBsaW5lMTogJycsXG4gICAgICAvLyBsaW5lMjogJycsXG4gICAgICAvLyBjaXR5OiAnJyxcbiAgICAgIC8vIHN0YXRlOiAnJyxcbiAgICAgIC8vIHppcGNvZGU6ICcnLFxuICAgICAgLy8gY3JlZGl0OiAnJyxcbiAgICAgIC8vIGV4cGlyeTogJycsXG4gICAgICAvLyBjdnY6ICcnLFxuICAgICAgLy8gYmlsbGluZ1ppcDogJydcbiAgICB9XG4gICAgdGhpcy5oaWRlTWUgPSB0aGlzLmhpZGVNZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblxuICB9XG4gIGhpZGVNZSgpIHtcbiAgICBsZXQgdG9IaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhpZGUtY29uZmlybWF0aW9uXCIpWzBdXG4gICAgdG9IaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wdXJjaGFzZScsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubmFtZSxcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5wYXNzd29yZCxcbiAgICAgICAgbGluZTE6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5saW5lMSxcbiAgICAgICAgbGluZTI6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5saW5lMixcbiAgICAgICAgY2l0eTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmNpdHksXG4gICAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuc3RhdGUsXG4gICAgICAgIHppcGNvZGU6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC56aXBjb2RlLFxuICAgICAgICBjcmVkaXQ6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5jcmVkaXQsXG4gICAgICAgIGV4cGlyeTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmV4cGlyeSxcbiAgICAgICAgY3Z2OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY3Z2LFxuICAgICAgICBiaWxsaW5nWmlwOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuYmlsbGluZ1ppcFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MgZnJvbSBwb3N0JylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZnJvbSBwb3N0JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb3BzIGZyb20gY29uZmlybWF0aW9uJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLWNvbmZpcm1hdGlvblwiID5cbiAgICAgICAgICA8aDE+Q29uZmlybWF0aW9uPC9oMT5cbiAgICAgICAgICA8ZGl2Pk5hbWU6IHt0aGlzLnN0YXRlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdj5FbWFpbDp7dGhpcy5zdGF0ZS51c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkFkZHJlc3M6e3RoaXMuc3RhdGUubGluZTF9PC9kaXY+XG4gICAgICAgICAgPGRpdj5DaXR5Ont0aGlzLnN0YXRlLmNpdHl9PC9kaXY+XG4gICAgICAgICAgPGRpdj5TdGF0ZTp7dGhpcy5zdGF0ZS5zdGF0ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlppcGNvZGU6e3RoaXMuc3RhdGUuemlwY29kZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkNyZWRpdDp7dGhpcy5zdGF0ZS5jcmVkaXR9PC9kaXY+XG4gICAgICAgICAgPGRpdj5DVlY6e3RoaXMuc3RhdGUuY3Z2fTwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgb25DbGlja0FwcDogdHJ1ZSwgb25DbGlja0NvbmZpcm1hdGlvbjogZmFsc2UgfSk7IHRoaXMuaGlkZU1lKCk7IHRoaXMuaGFuZGxlU3VibWl0KCkgfX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXYgPlxuICAgICAgICB7dGhpcy5zdGF0ZS5vbkNsaWNrQXBwID8gPEFwcCBzdGF0ZUZyb21Db25maXJtYXRpb249e3RoaXMuc3RhdGV9IC8+IDogbnVsbH1cbiAgICAgICAge3RoaXMuc3RhdGUub25DbGlja1BheW1lbnQgPyA8UGF5bWVudCAvPiA6IG51bGx9XG5cbiAgICAgIDwvZGl2ID5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRWpCQSxZQUFZO0VBQUE7RUFBQTtFQUNoQixzQkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUNqQiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUNYQyxVQUFVLEVBQUUsS0FBSztNQUNqQkMsY0FBYyxFQUFFLEtBQUs7TUFDckJDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsbUJBQW1CLEVBQUUsSUFBSTtNQUN6QkMsSUFBSSxFQUFFLE1BQUtQLEtBQUssQ0FBQ1EsZ0JBQWdCLEdBQUcsTUFBS1IsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0QsSUFBSSxHQUFHLE1BQUtQLEtBQUssQ0FBQ1MsUUFBUSxDQUFDRixJQUFJO01BQy9GRyxRQUFRLEVBQUUsTUFBS1YsS0FBSyxDQUFDUSxnQkFBZ0IsR0FBRyxNQUFLUixLQUFLLENBQUNRLGdCQUFnQixDQUFDRSxRQUFRLEdBQUcsTUFBS1YsS0FBSyxDQUFDUyxRQUFRLENBQUNFLE9BQU87TUFDMUdDLFFBQVEsRUFBRSxNQUFLWixLQUFLLENBQUNRLGdCQUFnQixHQUFHLE1BQUtSLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNJLFFBQVEsR0FBRyxNQUFLWixLQUFLLENBQUNTLFFBQVEsQ0FBQ0csUUFBUTtNQUMzR0MsS0FBSyxFQUFFLE1BQUtiLEtBQUssQ0FBQ1EsZ0JBQWdCLEdBQUcsTUFBS1IsS0FB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