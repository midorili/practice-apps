"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireWildcard(require("react-dom"));
var _Shipping = _interopRequireDefault(require("./Shipping.jsx"));
var _index = _interopRequireDefault(require("./index.jsx"));
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
var Account = /*#__PURE__*/function (_Component) {
  _inherits(Account, _Component);
  var _super = _createSuper(Account);
  function Account(props) {
    var _this;
    _classCallCheck(this, Account);
    _this = _super.call(this, props);
    _this.state = {
      onClickApp: false,
      onClickShipping: false,
      onClickAccount: true,
      name: '',
      username: '',
      password: ''
    };
    _this.hideMe = _this.hideMe.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Account, [{
    key: "hideMe",
    value: function hideMe() {
      var toHide = document.getElementsByClassName("hyde")[0];
      console.log('hydeme', toHide);
      toHide.style.display = 'none';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      console.log('p account', this.props);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hyde"
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        className: "hyde"
      }, "Create an Account"), /*#__PURE__*/_react["default"].createElement("form", {
        className: "hyde"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "Name"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "name",
        type: "text",
        value: this.state.name,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            name: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Username/Email"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "username-email",
        type: "text",
        value: this.state.username,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            username: event.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("label", null, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "password",
        type: "text",
        value: this.state.password,
        onChange: function onChange(event) {
          event.preventDefault();
          _this2.setState({
            password: event.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "hyde",
        onClick: function onClick() {
          _this2.setState({
            onClickShipping: true,
            onClickAccount: false
          });
          _this2.hideMe();
        }
      }, "Next")), this.state.onClickShipping ? /*#__PURE__*/_react["default"].createElement(_Shipping["default"], {
        stateFromAccount: this.state
      }) : null);
    }
  }]);
  return Account;
}(_react.Component);
var _default = Account;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsIm9uQ2xpY2tBcHAiLCJvbkNsaWNrU2hpcHBpbmciLCJvbkNsaWNrQWNjb3VudCIsIm5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGlkZU1lIiwiYmluZCIsInRvSGlkZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9BY2NvdW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTaGlwcGluZyBmcm9tICcuL1NoaXBwaW5nLmpzeCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW5kZXguanN4J1xuXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvbkNsaWNrQXBwOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2tTaGlwcGluZzogZmFsc2UsXG4gICAgICBvbkNsaWNrQWNjb3VudDogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH1cbiAgICB0aGlzLmhpZGVNZSA9IHRoaXMuaGlkZU1lLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoaWRlTWUoKSB7XG4gICAgbGV0IHRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoeWRlXCIpWzBdXG4gICAgY29uc29sZS5sb2coJ2h5ZGVtZScsIHRvSGlkZSlcbiAgICB0b0hpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygncCBhY2NvdW50JywgdGhpcy5wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh5ZGVcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaHlkZVwiPkNyZWF0ZSBhbiBBY2NvdW50PC9oMT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJoeWRlXCI+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZS9FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZS1lbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoeWRlXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgb25DbGlja1NoaXBwaW5nOiB0cnVlLCBvbkNsaWNrQWNjb3VudDogZmFsc2UgfSk7IHRoaXMuaGlkZU1lKCkgfX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUub25DbGlja1NoaXBwaW5nID8gPFNoaXBwaW5nIHN0YXRlRnJvbUFjY291bnQ9e3RoaXMuc3RhdGV9IC8+IDogbnVsbH1cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLm9uQ2xpY2tBcHAgPyA8QXBwIC8+IDogbnVsbH0gKi99XG5cbiAgICAgIDwvZGl2ID5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUd2QkEsT0FBTztFQUFBO0VBQUE7RUFFWCxpQkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUNqQiwwQkFBTUEsS0FBSztJQUNYLE1BQUtDLEtBQUssR0FBRztNQUNYQyxVQUFVLEVBQUUsS0FBSztNQUNqQkMsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLGNBQWMsRUFBRSxJQUFJO01BQ3BCQyxJQUFJLEVBQUUsRUFBRTtNQUNSQyxRQUFRLEVBQUUsRUFBRTtNQUNaQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0QsTUFBS0MsTUFBTSxHQUFHLE1BQUtBLE1BQU0sQ0FBQ0MsSUFBSSwrQkFBTTtJQUFDO0VBRXZDO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsa0JBQVM7TUFDUCxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3ZEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVKLE1BQU0sQ0FBQztNQUM3QkEsTUFBTSxDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQy9CO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFBQTtNQUNQSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUM7TUFFcEMsb0JBQ0UsMERBQ0U7UUFBSyxTQUFTLEVBQUM7TUFBTSxnQkFDbkI7UUFBSSxTQUFTLEVBQUM7TUFBTSxHQUFDLG1CQUFpQixDQUFLLGVBQzNDO1FBQU0sU0FBUyxFQUFDO01BQU0sZ0JBQ3BCLCtDQUFPLE1BQUksQ0FBUSxlQUNuQjtRQUFPLEVBQUUsRUFBQyxNQUFNO1FBQUMsSUFBSSxFQUFDLE1BQU07UUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUNJLElBQUs7UUFBQyxRQUFRLEVBQUUsa0JBQUNZLEtBQUssRUFBSztVQUFFQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtVQUFFLE1BQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQUVkLElBQUksRUFBRVksS0FBSyxDQUFDRyxNQUFNLENBQUNDO1VBQU0sQ0FBQyxDQUFDO1FBQUM7TUFBRSxFQUFTLGVBQzNKLCtDQUFPLGdCQUFjLENBQVEsZUFDN0I7UUFBTyxFQUFFLEVBQUMsZ0JBQWdCO1FBQUMsSUFBSSxFQUFDLE1BQU07UUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDSyxRQUFTO1FBQUMsUUFBUSxFQUFFLGtCQUFDVyxLQUFLLEVBQUs7VUFBRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFBRSxNQUFJLENBQUNDLFFBQVEsQ0FBQztZQUFFYixRQUFRLEVBQUVXLEtBQUssQ0FBQ0csTUFBTSxDQUFDQztVQUFNLENBQUMsQ0FBQztRQUFDO01BQUUsRUFBUyxlQUM3SywrQ0FBTyxVQUFRLENBQVEsZUFDdkI7UUFBTyxFQUFFLEVBQUMsVUFBVTtRQUFDLElBQUksRUFBQyxNQUFNO1FBQUMsS0FBSyxFQUFFLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ00sUUFBUztRQUFDLFFBQVEsRUFBRSxrQkFBQ1UsS0FBSyxFQUFLO1VBQUVBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQUUsTUFBSSxDQUFDQyxRQUFRLENBQUM7WUFBRVosUUFBUSxFQUFFVSxLQUFLLENBQUNHLE1BQU0sQ0FBQ0M7VUFBTSxDQUFDLENBQUM7UUFBQztNQUFFLEVBQVMsQ0FDbEssZUFDUDtRQUFRLFNBQVMsRUFBQyxNQUFNO1FBQUMsT0FBTyxFQUFFLG1CQUFNO1VBQUUsTUFBSSxDQUFDRixRQUFRLENBQUM7WUFBRWhCLGVBQWUsRUFBRSxJQUFJO1lBQUVDLGNBQWMsRUFBRTtVQUFNLENBQUMsQ0FBQztVQUFFLE1BQUksQ0FBQ0ksTUFBTSxFQUFFO1FBQUM7TUFBRSxHQUFDLE1BQUksQ0FBUyxDQUNySSxFQUNMLElBQUksQ0FBQ1AsS0FBSyxDQUFDRSxlQUFlLGdCQUFHLGdDQUFDLG9CQUFRO1FBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDRjtNQUFNLEVBQUcsR0FBRyxJQUFJLENBRzFFO0lBRVg7RUFBQztFQUFBO0FBQUEsRUEzQ21CcUIsZ0JBQVM7QUFBQSxlQThDaEJ2QixPQUFPO0FBQUEifQ==