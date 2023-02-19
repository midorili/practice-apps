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
            onClickApp: true
          });
          _this2.hideMe();
          _this2.handleSubmit();
        }
      }, "Purchase")), this.state.onClickApp ? /*#__PURE__*/_react["default"].createElement(_index["default"], {
        stateFromConfirmation: this.state
      }) : null);
    }
  }]);
  return Confirmation;
}(_react.Component);
var _default = Confirmation;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJwcm9wcyIsInN0YXRlIiwib25DbGlja0FwcCIsIm9uQ2xpY2tBY2NvdW50Iiwib25DbGlja1NoaXBwaW5nIiwib25DbGlja1BheW1lbnQiLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwibmFtZSIsInN0YXRlRnJvbVBheW1lbnQiLCJzdGF0ZUFwcCIsInVzZXJuYW1lIiwicGF5bWVudCIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXBjb2RlIiwiY3JlZGl0IiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhpZGVNZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJ0b0hpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi9zcmMvQ29uZmlybWF0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleC5qc3gnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9uQ2xpY2tBcHA6IGZhbHNlLFxuICAgICAgb25DbGlja0FjY291bnQ6IGZhbHNlLFxuICAgICAgb25DbGlja1NoaXBwaW5nOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tQYXltZW50OiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tDb25maXJtYXRpb246IHRydWUsXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubmFtZSA6IHRoaXMucHJvcHMuc3RhdGVBcHAubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQudXNlcm5hbWUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnBheW1lbnQsXG4gICAgICBwYXNzd29yZDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnBhc3N3b3JkIDogdGhpcy5wcm9wcy5zdGF0ZUFwcC5wYXNzd29yZCxcbiAgICAgIGxpbmUxOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubGluZTEgOiB0aGlzLnByb3BzLnN0YXRlQXBwLmxpbmUxLFxuICAgICAgbGluZTI6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudCA/IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5saW5lMiA6IHRoaXMucHJvcHMuc3RhdGVBcHAubGluZTIsXG4gICAgICBjaXR5OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY2l0eSA6IHRoaXMucHJvcHMuc3RhdGVBcHAuY2l0eSxcbiAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuc3RhdGUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnN0YXRlLFxuICAgICAgemlwY29kZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnppcGNvZGUgOiB0aGlzLnByb3BzLnN0YXRlQXBwLnppcGNvZGUsXG4gICAgICBjcmVkaXQ6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudCA/IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5jcmVkaXQgOiB0aGlzLnByb3BzLnN0YXRlQXBwLmNyZWRpdCxcbiAgICAgIGV4cGlyeTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50ID8gdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmV4cGlyeSA6IHRoaXMucHJvcHMuc3RhdGVBcHAuZXhwaXJ5LFxuICAgICAgY3Z2OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY3Z2IDogdGhpcy5wcm9wcy5zdGF0ZUFwcC5jdnYsXG4gICAgICBiaWxsaW5nWmlwOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQgPyB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuYmlsbGluZ1ppcCA6IHRoaXMucHJvcHMuc3RhdGVBcHAuYmlsbGluZ1ppcFxuICAgIH1cbiAgICB0aGlzLmhpZGVNZSA9IHRoaXMuaGlkZU1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgaGlkZU1lKCkge1xuICAgIGxldCB0b0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlkZS1jb25maXJtYXRpb25cIilbMF1cbiAgICB0b0hpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3B1cmNoYXNlJyxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5uYW1lLFxuICAgICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnBhc3N3b3JkLFxuICAgICAgICBsaW5lMTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmxpbmUxLFxuICAgICAgICBsaW5lMjogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmxpbmUyLFxuICAgICAgICBjaXR5OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY2l0eSxcbiAgICAgICAgc3RhdGU6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5zdGF0ZSxcbiAgICAgICAgemlwY29kZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnppcGNvZGUsXG4gICAgICAgIGNyZWRpdDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmNyZWRpdCxcbiAgICAgICAgZXhwaXJ5OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuZXhwaXJ5LFxuICAgICAgICBjdnY6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5jdnYsXG4gICAgICAgIGJpbGxpbmdaaXA6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5iaWxsaW5nWmlwXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBmcm9tIHBvc3QnKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBmcm9tIHBvc3QnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMgZnJvbSBjb25maXJtYXRpb24nLCB0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtY29uZmlybWF0aW9uXCIgPlxuICAgICAgICAgIDxoMT5Db25maXJtYXRpb248L2gxPlxuICAgICAgICAgIDxkaXY+TmFtZToge3RoaXMuc3RhdGUubmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkVtYWlsOnt0aGlzLnN0YXRlLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXY+QWRkcmVzczp7dGhpcy5zdGF0ZS5saW5lMX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkNpdHk6e3RoaXMuc3RhdGUuY2l0eX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlN0YXRlOnt0aGlzLnN0YXRlLnN0YXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+WmlwY29kZTp7dGhpcy5zdGF0ZS56aXBjb2RlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+Q3JlZGl0Ont0aGlzLnN0YXRlLmNyZWRpdH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkNWVjp7dGhpcy5zdGF0ZS5jdnZ9PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBvbkNsaWNrQXBwOiB0cnVlIH0pOyB0aGlzLmhpZGVNZSgpOyB0aGlzLmhhbmRsZVN1Ym1pdCgpIH19PlB1cmNoYXNlPC9idXR0b24+XG4gICAgICAgIDwvZGl2ID5cbiAgICAgICAge3RoaXMuc3RhdGUub25DbGlja0FwcCA/IDxBcHAgc3RhdGVGcm9tQ29uZmlybWF0aW9uPXt0aGlzLnN0YXRlfSAvPiA6IG51bGx9XG4gICAgICA8L2RpdiA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUVqQkEsWUFBWTtFQUFBO0VBQUE7RUFDaEIsc0JBQVlDLEtBQUssRUFBRTtJQUFBO0lBQUE7SUFDakIsMEJBQU1B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