"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _GlossaryListEntry = _interopRequireDefault(require("./GlossaryListEntry"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var GlossaryList = function GlossaryList(_ref) {
  var words = _ref.words;
  // console.log('w', words)

  return /*#__PURE__*/React.createElement("div", {
    className: "glossary-list"
  }, words.map(function (word) {
    return /*#__PURE__*/React.createElement(_GlossaryListEntry["default"], {
      word: word
    });
  }));
};
var _default = GlossaryList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHbG9zc2FyeUxpc3QiLCJ3b3JkcyIsIm1hcCIsIndvcmQiXSwic291cmNlcyI6WyIuLi9zcmMvR2xvc3NhcnlMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR2xvc3NhcnlMaXN0RW50cnkgZnJvbSAnLi9HbG9zc2FyeUxpc3RFbnRyeSc7XG5cbmNvbnN0IEdsb3NzYXJ5TGlzdCA9ICh7IHdvcmRzIH0pID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ3cnLCB3b3JkcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvc3NhcnktbGlzdFwiPlxuICAgICAge3dvcmRzLm1hcCgod29yZCkgPT4ge1xuXG4gICAgICAgIHJldHVybiA8IEdsb3NzYXJ5TGlzdEVudHJ5IHdvcmQ9e3dvcmR9IC8+XG4gICAgICB9KX1cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb3NzYXJ5TGlzdDsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFvRDtBQUVwRCxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxPQUFrQjtFQUFBLElBQVpDLEtBQUssUUFBTEEsS0FBSztFQUMzQjs7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFlLEdBQzNCQSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUs7SUFFbkIsb0JBQU8sb0JBQUUsNkJBQWlCO01BQUMsSUFBSSxFQUFFQTtJQUFLLEVBQUc7RUFDM0MsQ0FBQyxDQUFDLENBRUU7QUFFVixDQUFDO0FBQUEsZUFFY0gsWUFBWTtBQUFBIn0=