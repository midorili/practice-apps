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
      name: _this.props.stateFromPayment.name,
      username: _this.props.stateFromPayment.username,
      password: _this.props.stateFromPayment.password,
      line1: _this.props.stateFromPayment.line1,
      line2: _this.props.stateFromPayment.line2,
      city: _this.props.stateFromPayment.city,
      state: _this.props.stateFromPayment.state,
      zipcode: _this.props.stateFromPayment.zipcode,
      credit: _this.props.stateFromPayment.credit,
      expiry: _this.props.stateFromPayment.expiry,
      cvv: _this.props.stateFromPayment.cvv,
      billingZip: _this.props.stateFromPayment.billingZip
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJwcm9wcyIsInN0YXRlIiwib25DbGlja0FwcCIsIm9uQ2xpY2tBY2NvdW50Iiwib25DbGlja1NoaXBwaW5nIiwib25DbGlja1BheW1lbnQiLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwibmFtZSIsInN0YXRlRnJvbVBheW1lbnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXBjb2RlIiwiY3JlZGl0IiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhpZGVNZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJ0b0hpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi9zcmMvQ29uZmlybWF0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleC5qc3gnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9uQ2xpY2tBcHA6IGZhbHNlLFxuICAgICAgb25DbGlja0FjY291bnQ6IGZhbHNlLFxuICAgICAgb25DbGlja1NoaXBwaW5nOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tQYXltZW50OiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tDb25maXJtYXRpb246IHRydWUsXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnBhc3N3b3JkLFxuICAgICAgbGluZTE6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5saW5lMSxcbiAgICAgIGxpbmUyOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubGluZTIsXG4gICAgICBjaXR5OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY2l0eSxcbiAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuc3RhdGUsXG4gICAgICB6aXBjb2RlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuemlwY29kZSxcbiAgICAgIGNyZWRpdDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmNyZWRpdCxcbiAgICAgIGV4cGlyeTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmV4cGlyeSxcbiAgICAgIGN2djogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmN2dixcbiAgICAgIGJpbGxpbmdaaXA6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5iaWxsaW5nWmlwXG4gICAgfVxuICAgIHRoaXMuaGlkZU1lID0gdGhpcy5oaWRlTWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cbiAgfVxuICBoaWRlTWUoKSB7XG4gICAgbGV0IHRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoaWRlLWNvbmZpcm1hdGlvblwiKVswXVxuICAgIHRvSGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHVyY2hhc2UnLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50Lm5hbWUsXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQucGFzc3dvcmQsXG4gICAgICAgIGxpbmUxOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubGluZTEsXG4gICAgICAgIGxpbmUyOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQubGluZTIsXG4gICAgICAgIGNpdHk6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5jaXR5LFxuICAgICAgICBzdGF0ZTogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LnN0YXRlLFxuICAgICAgICB6aXBjb2RlOiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuemlwY29kZSxcbiAgICAgICAgY3JlZGl0OiB0aGlzLnByb3BzLnN0YXRlRnJvbVBheW1lbnQuY3JlZGl0LFxuICAgICAgICBleHBpcnk6IHRoaXMucHJvcHMuc3RhdGVGcm9tUGF5bWVudC5leHBpcnksXG4gICAgICAgIGN2djogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmN2dixcbiAgICAgICAgYmlsbGluZ1ppcDogdGhpcy5wcm9wcy5zdGF0ZUZyb21QYXltZW50LmJpbGxpbmdaaXBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIGZyb20gcG9zdCcpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcG9zdCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMgZnJvbSBjb25maXJtYXRpb24nLCB0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtY29uZmlybWF0aW9uXCIgPlxuICAgICAgICAgIDxoMT5Db25maXJtYXRpb248L2gxPlxuICAgICAgICAgIDxkaXY+TmFtZToge3RoaXMuc3RhdGUubmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkVtYWlsOnt0aGlzLnN0YXRlLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXY+QWRkcmVzczp7dGhpcy5zdGF0ZS5saW5lMX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkNpdHk6e3RoaXMuc3RhdGUuY2l0eX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlN0YXRlOnt0aGlzLnN0YXRlLnN0YXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+WmlwY29kZTp7dGhpcy5zdGF0ZS56aXBjb2RlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+Q3JlZGl0Ont0aGlzLnN0YXRlLmNyZWRpdH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkNWVjp7dGhpcy5zdGF0ZS5jdnZ9PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBvbkNsaWNrQXBwOiB0cnVlLCBvbkNsaWNrQ29uZmlybWF0aW9uOiBmYWxzZSB9KTsgdGhpcy5oaWRlTWUoKTsgdGhpcy5oYW5kbGVTdWJtaXQoKSB9fT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICA8L2RpdiA+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9uQ2xpY2tBcHAgPyA8QXBwIHN0YXRlRnJvbUNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZX0gLz4gOiBudWxsfVxuICAgICAgICB7dGhpcy5zdGF0ZS5vbkNsaWNrUGF5bWVudCA/IDxQYXltZW50IC8+IDogbnVsbH1cblxuICAgICAgPC9kaXYgPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtYXRpb247Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFFakJBLFlBQVk7RUFBQTtFQUFBO0VBQ2hCLHNCQUFZQyxLQUFLLEVBQUU7SUFBQTtJQUFBO0lBQ2pCLDBCQUFNQSxLQUFLO0lBQ1gsTUFBS0MsS0FBSyxHQUFHO01BQ1hDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLGNBQWMsRUFBRSxLQUFLO01BQ3JCQyxtQkFBbUIsRUFBRSxJQUFJO01BQ3pCQyxJQUFJLEVBQUUsTUFBS1AsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0QsSUFBSTtNQUN0Q0UsUUFBUSxFQUFFLE1BQUtULEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNDLFFBQVE7TUFDOUNDLFFBQVEsRUFBRSxNQUFLVixLQUFLLENBQUNRLGdCQUFnQixDQUFDRSxRQUFRO01BQzlDQyxLQUFLLEVBQUUsTUFBS1gsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0csS0FBSztNQUN4Q0MsS0FBSyxFQUFFLE1BQUtaLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNJLEtBQUs7TUFDeENDLElBQUksRUFBRSxNQUFLYixLQUFLLENBQUNRLGdCQUFnQixDQUFDSyxJQUFJO01BQ3RDWixLQUFLLEVBQUUsTUFBS0QsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ1AsS0FBSztNQUN4Q2EsT0FBTyxFQUFFLE1BQUtkLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNNLE9BQU87TUFDNUNDLE1BQU0sRUFBRSxNQUFLZixLQUFLLENBQUNRLGdCQUFnQixDQUFDTyxNQUFNO01BQzFDQyxNQUFNLEVBQUUsTUFBS2hCLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNRLE1BQU07TUFDMUNDLEdBQUcsRUFBRSxNQUFLakIsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ1MsR0FBRztNQUNwQ0MsVUFBVSxFQUFFLE1BQUtsQixLQUFLLENBQUNRLGdCQUFnQixDQUFDVTtJQUMxQyxDQUFDO0lBQ0QsTUFBS0MsTUFBTSxHQUFHLE1BQUtBLE1BQU0sQ0FBQ0MsSUFBSSwrQkFBTTtJQUNwQyxNQUFLQyxZQUFZLEdBQUcsTUFBS0EsWUFBWSxDQUFDRCxJQUFJLCtCQUFNO0lBQUM7RUFFbkQ7RUFBQztJQUFBO0lBQUEsT0FDRCxrQkFBUztNQUNQLElBQUlFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwRUYsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQy9CO0VBQUM7SUFBQTtJQUFBLE9BRUQsd0JBQWU7TUFDYkMsa0JBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ0xDLEdBQUcsRUFBRSxnQ0FBZ0M7UUFDckNDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRTtVQUNKeEIsSUFBSSxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0QsSUFBSTtVQUN0Q0UsUUFBUSxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0MsUUFBUTtVQUM5Q0MsUUFBUSxFQUFFLElBQUksQ0FBQ1YsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0UsUUFBUTtVQUM5Q0MsS0FBSyxFQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0csS0FBSztVQUN4Q0MsS0FBSyxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0ksS0FBSztVQUN4Q0MsSUFBSSxFQUFFLElBQUksQ0FBQ2IsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0ssSUFBSTtVQUN0Q1osS0FBSyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ1AsS0FBSztVQUN4Q2EsT0FBTyxFQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ00sT0FBTztVQUM1Q0MsTUFBTSxFQUFFLElBQUksQ0FBQ2YsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ08sTUFBTTtVQUMxQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUNRLE1BQU07VUFDMUNDLEdBQUcsRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNRLGdCQUFnQixDQUFDUyxHQUFHO1VBQ3BDQyxVQUFVLEVBQUUsSUFBSSxDQUFDbEIsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ1U7UUFDMUMsQ0FBQztRQUNEYyxPQUFPLEVBQUUsbUJBQU07VUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQztRQUNEQyxLQUFLLEVBQUUsaUJBQU07VUFDWEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUVELGtCQUFTO01BQUE7TUFDUEQsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDbEMsS0FBSyxDQUFDO01BQ2xELG9CQUNFLDBEQUNFO1FBQUssU0FBUyxFQUFDO01BQW1CLGdCQUNoQyw0Q0FBSSxjQUFZLENBQUssZUFDckIsNkNBQUssUUFBTSxFQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTSxJQUFJLENBQU8sZUFDbEMsNkNBQUssUUFBTSxFQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDUSxRQUFRLENBQU8sZUFDdEMsNkNBQUssVUFBUSxFQUFDLElBQUksQ0FBQ1IsS0FBSyxDQUFDVSxLQUFLLENBQU8sZUFDckMsNkNBQUssT0FBSyxFQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDWSxJQUFJLENBQU8sZUFDakMsNkNBQUssUUFBTSxFQUFDLElBQUksQ0FBQ1osS0FBSyxDQUFDQSxLQUFLLENBQU8sZUFDbkMsNkNBQUssVUFBUSxFQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDYSxPQUFPLENBQU8sZUFDdkMsNkNBQUssU0FBTyxFQUFDLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxNQUFNLENBQU8sZUFDckMsNkNBQUssTUFBSSxFQUFDLElBQUksQ0FBQ2QsS0FBSyxDQUFDZ0IsR0FBRyxDQUFPLGVBQy9CO1FBQVEsT0FBTyxFQUFFLG1CQUFNO1VBQUUsTUFBSSxDQUFDbUIsUUFBUSxDQUFDO1lBQUVsQyxVQUFVLEVBQUUsSUFBSTtZQUFFSSxtQkFBbUIsRUFBRTtVQUFNLENBQUMsQ0FBQztVQUFFLE1BQUksQ0FBQ2EsTUFBTSxFQUFFO1VBQUUsTUFBSSxDQUFDRSxZQUFZLEVBQUU7UUFBQztNQUFFLEdBQUMsVUFBUSxDQUFTLENBQzVJLEVBQ04sSUFBSSxDQUFDcEIsS0FBSyxDQUFDQyxVQUFVLGdCQUFHLGdDQUFDLGlCQUFHO1FBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDRDtNQUFNLEVBQUcsR0FBRyxJQUFJLEVBQ3pFLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxjQUFjLGdCQUFHLGdDQUFDLE9BQU8sT0FBRyxHQUFHLElBQUksQ0FFMUM7SUFFWDtFQUFDO0VBQUE7QUFBQSxFQS9Fd0JnQyxnQkFBUztBQUFBLGVBa0ZyQnRDLFlBQVk7QUFBQSJ9