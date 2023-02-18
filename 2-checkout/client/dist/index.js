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
    _this.pageLoad = _this.pageLoad.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(App, [{
    key: "pageLoad",
    value: function pageLoad() {
      var _this2 = this;
      _jquery["default"].ajax({
        url: 'http://localhost:3000/purchase',
        method: "GET",
        success: function success(data) {
          console.log('success from get', data);
          if (data) {
            _this2.setState({
              onClickApp: false,
              onClickAccount: false,
              onClickShipping: false,
              onClickPayment: false,
              onClickConfirmation: true,
              name: data.name,
              username: data.username,
              password: data.password,
              line1: data.line1,
              line2: data.line2,
              city: data.city,
              state: data.state,
              zipcode: data.zipcode,
              credit: data.credit,
              expiry: data.expiry,
              cvv: data.cvv,
              billingZip: data.billingZip
            });
          }
        },
        error: function error() {
          console.log('user not found');
        }
      });
    }
  }, {
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hide-me")[0];
      toHide.style.display = 'none';
      //change this to state
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hide-me"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _Added["default"]
      }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("code", null, "Page Cookie: ", JSON.stringify(document.cookie, undefined, "\t"))), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          _this3.setState({
            onClickAccount: true,
            onClickApp: false
          });
          _this3.hideMe();
          _this3.pageLoad();
        }
      }, "Checkout")), this.state.onClickAccount ? /*#__PURE__*/_react["default"].createElement(_Account["default"], {
        accountState: this.state.onClickAccount
      }) : null, this.state.onClickConfirmation ? /*#__PURE__*/_react["default"].createElement(_Confirmation["default"], {
        stateApp: this.state
      }) : null);
    }
  }]);
  return App;
}(_react.Component);
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwib25DbGlja0FwcCIsIm9uQ2xpY2tBY2NvdW50Iiwib25DbGlja1NoaXBwaW5nIiwib25DbGlja1BheW1lbnQiLCJvbkNsaWNrQ29uZmlybWF0aW9uIiwibmFtZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcGNvZGUiLCJjcmVkaXQiLCJjdnYiLCJleHBpcnkiLCJiaWxsaW5nWmlwIiwiaGlkZU1lIiwiYmluZCIsInBhZ2VMb2FkIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImVycm9yIiwidG9IaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiQWRkZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29va2llIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQuanN4JztcbmltcG9ydCBTaGlwcGluZyBmcm9tICcuL1NoaXBwaW5nLmpzeCc7XG5pbXBvcnQgUGF5bWVudCBmcm9tICcuL1BheW1lbnQuanN4JztcbmltcG9ydCBBZGRlZCBmcm9tICcuL0FkZGVkLmpwZyc7XG5pbXBvcnQgQ29uZmlybWF0aW9uIGZyb20gJy4vQ29uZmlybWF0aW9uLmpzeCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvbkNsaWNrQXBwOiB0cnVlLFxuICAgICAgb25DbGlja0FjY291bnQ6IGZhbHNlLFxuICAgICAgb25DbGlja1NoaXBwaW5nOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tQYXltZW50OiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tDb25maXJtYXRpb246IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsaW5lMTogJycsXG4gICAgICBsaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnLFxuICAgICAgY3JlZGl0OiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBleHBpcnk6ICcnLFxuICAgICAgYmlsbGluZ1ppcDogJydcbiAgICB9XG4gICAgdGhpcy5oaWRlTWUgPSB0aGlzLmhpZGVNZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxvYWQgPSB0aGlzLnBhZ2VMb2FkLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIHBhZ2VMb2FkKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHVyY2hhc2UnLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MgZnJvbSBnZXQnLCBkYXRhKVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb25DbGlja0FwcDogZmFsc2UsXG4gICAgICAgICAgICBvbkNsaWNrQWNjb3VudDogZmFsc2UsXG4gICAgICAgICAgICBvbkNsaWNrU2hpcHBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGlja1BheW1lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGlja0NvbmZpcm1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgICBsaW5lMTogZGF0YS5saW5lMSxcbiAgICAgICAgICAgIGxpbmUyOiBkYXRhLmxpbmUyLFxuICAgICAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgICAgICB6aXBjb2RlOiBkYXRhLnppcGNvZGUsXG4gICAgICAgICAgICBjcmVkaXQ6IGRhdGEuY3JlZGl0LFxuICAgICAgICAgICAgZXhwaXJ5OiBkYXRhLmV4cGlyeSxcbiAgICAgICAgICAgIGN2djogZGF0YS5jdnYsXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBkYXRhLmJpbGxpbmdaaXBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbm90IGZvdW5kJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGlkZU1lKCkge1xuICAgIGxldCB0b0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlkZS1tZVwiKVswXVxuICAgIHRvSGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vY2hhbmdlIHRoaXMgdG8gc3RhdGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLW1lXCI+XG4gICAgICAgICAgPGltZyBzcmM9e0FkZGVkfSAvPlxuICAgICAgICAgIDxwID5cbiAgICAgICAgICAgIDxjb2RlID5QYWdlIENvb2tpZToge0pTT04uc3RyaW5naWZ5KGRvY3VtZW50LmNvb2tpZSwgdW5kZWZpbmVkLCBcIlxcdFwiKX08L2NvZGU+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgb25DbGlja0FjY291bnQ6IHRydWUsIG9uQ2xpY2tBcHA6IGZhbHNlIH0pOyB0aGlzLmhpZGVNZSgpOyB0aGlzLnBhZ2VMb2FkKCkgfX0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXYgPlxuICAgICAgICB7dGhpcy5zdGF0ZS5vbkNsaWNrQWNjb3VudCA/IDxBY2NvdW50IGFjY291bnRTdGF0ZT17dGhpcy5zdGF0ZS5vbkNsaWNrQWNjb3VudH0gLz4gOiBudWxsfVxuICAgICAgICB7dGhpcy5zdGF0ZS5vbkNsaWNrQ29uZmlybWF0aW9uID8gPENvbmZpcm1hdGlvbiBzdGF0ZUFwcD17dGhpcy5zdGF0ZX0gLz4gOiBudWxsfVxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFHakJBLEdBQUc7RUFBQTtFQUFBO0VBQ1AsYUFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUNqQiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUNYQyxVQUFVLEVBQUUsSUFBSTtNQUNoQkMsY0FBYyxFQUFFLEtBQUs7TUFDckJDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsbUJBQW1CLEVBQUUsS0FBSztNQUMxQkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsSUFBSSxFQUFFLEVBQUU7TUFDUlgsS0FBSyxFQUFFLEVBQUU7TUFDVFksT0FBTyxFQUFFLEVBQUU7TUFDWEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsR0FBRyxFQUFFLEVBQUU7TUFDUEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNELE1BQUtDLE1BQU0sR0FBRyxNQUFLQSxNQUFNLENBQUNDLElBQUksK0JBQU07SUFDcEMsTUFBS0MsUUFBUSxHQUFHLE1BQUtBLFFBQVEsQ0FBQ0QsSUFBSSwrQkFBTTtJQUFDO0VBQzNDO0VBQUM7SUFBQTtJQUFBLE9BR0Qsb0JBQVc7TUFBQTtNQUNURSxrQkFBQyxDQUFDQyxJQUFJLENBQUM7UUFDTEMsR0FBRyxFQUFFLGdDQUFnQztRQUNyQ0MsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFLGlCQUFDQyxJQUFJLEVBQUs7VUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFRixJQUFJLENBQUM7VUFDckMsSUFBSUEsSUFBSSxFQUFFO1lBQ1IsTUFBSSxDQUFDRyxRQUFRLENBQUM7Y0FDWjNCLFVBQVUsRUFBRSxLQUFLO2NBQ2pCQyxjQUFjLEVBQUUsS0FBSztjQUNyQkMsZUFBZSxFQUFFLEtBQUs7Y0FDdEJDLGNBQWMsRUFBRSxLQUFLO2NBQ3JCQyxtQkFBbUIsRUFBRSxJQUFJO2NBQ3pCQyxJQUFJLEVBQUVtQixJQUFJLENBQUNuQixJQUFJO2NBQ2ZDLFFBQVEsRUFBRWtCLElBQUksQ0FBQ2xCLFFBQVE7Y0FDdkJDLFFBQVEsRUFBRWlCLElBQUksQ0FBQ2pCLFFBQVE7Y0FDdkJDLEtBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQUs7Y0FDakJDLEtBQUssRUFBRWUsSUFBSSxDQUFDZixLQUFLO2NBQ2pCQyxJQUFJLEVBQUVjLElBQUksQ0FBQ2QsSUFBSTtjQUNmWCxLQUFLLEVBQUV5QixJQUFJLENBQUN6QixLQUFLO2NBQ2pCWSxPQUFPLEVBQUVhLElBQUksQ0FBQ2IsT0FBTztjQUNyQkMsTUFBTSxFQUFFWSxJQUFJLENBQUNaLE1BQU07Y0FDbkJFLE1BQU0sRUFBRVUsSUFBSSxDQUFDVixNQUFNO2NBQ25CRCxHQUFHLEVBQUVXLElBQUksQ0FBQ1gsR0FBRztjQUNiRSxVQUFVLEVBQUVTLElBQUksQ0FBQ1Q7WUFDbkIsQ0FBQyxDQUFDO1VBQ0o7UUFDRixDQUFDO1FBQ0RhLEtBQUssRUFBRSxpQkFBTTtVQUNYSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDUCxJQUFJRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFERixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDN0I7SUFDRjtFQUFDO0lBQUE7SUFBQSxPQUVELGtCQUFTO01BQUE7TUFDUCxvQkFDRSwwREFDRTtRQUFLLFNBQVMsRUFBQztNQUFTLGdCQUN0QjtRQUFLLEdBQUcsRUFBRUM7TUFBTSxFQUFHLGVBQ25CLHdEQUNFLDhDQUFPLGVBQWEsRUFBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLFFBQVEsQ0FBQ08sTUFBTSxFQUFFQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQVEsQ0FDM0UsZUFDSjtRQUFRLE9BQU8sRUFBRSxtQkFBTTtVQUFFLE1BQUksQ0FBQ1gsUUFBUSxDQUFDO1lBQUUxQixjQUFjLEVBQUUsSUFBSTtZQUFFRCxVQUFVLEVBQUU7VUFBTSxDQUFDLENBQUM7VUFBRSxNQUFJLENBQUNnQixNQUFNLEVBQUU7VUFBRSxNQUFJLENBQUNFLFFBQVEsRUFBRTtRQUFDO01BQUUsR0FBQyxVQUFRLENBQVMsQ0FDbkksRUFDTixJQUFJLENBQUNuQixLQUFLLENBQUNFLGNBQWMsZ0JBQUcsZ0NBQUMsbUJBQU87UUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRixLQUFLLENBQUNFO01BQWUsRUFBRyxHQUFHLElBQUksRUFDdkYsSUFBSSxDQUFDRixLQUFLLENBQUNLLG1CQUFtQixnQkFBRyxnQ0FBQyx3QkFBWTtRQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNMO01BQU0sRUFBRyxHQUFHLElBQUksQ0FFM0U7SUFFVjtFQUFDO0VBQUE7QUFBQSxFQWxGZXdDLGdCQUFTO0FBb0YzQkMsb0JBQVEsQ0FBQ0MsTUFBTSxlQUFDLGdDQUFDLEdBQUcsT0FBRyxFQUFFWCxRQUFRLENBQUNZLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUFBLGVBRTFDN0MsR0FBRztBQUFBIn0=