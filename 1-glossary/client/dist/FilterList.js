"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FilterList = function FilterList(_ref) {
  var filter = _ref.filter;
  console.log('f', filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "filter-name"
  }, "Word:", filter.word), /*#__PURE__*/React.createElement("div", {
    className: "filter-description"
  }, "Description:", filter.definition));
};
var _default = FilterList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWx0ZXJMaXN0IiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsIndvcmQiLCJkZWZpbml0aW9uIl0sInNvdXJjZXMiOlsiLi4vc3JjL0ZpbHRlckxpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgRmlsdGVyTGlzdCA9ICh7IGZpbHRlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdmJywgZmlsdGVyKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW5hbWVcIj5Xb3JkOntmaWx0ZXIud29yZH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246e2ZpbHRlci5kZWZpbml0aW9ufTwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyTGlzdDsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBaUM7QUFFakMsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsT0FBbUI7RUFBQSxJQUFiQyxNQUFNLFFBQU5BLE1BQU07RUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsRUFBRUYsTUFBTSxDQUFDO0VBRXhCLG9CQUNFLDhDQUNFO0lBQUssU0FBUyxFQUFDO0VBQWEsR0FBQyxPQUFLLEVBQUNBLE1BQU0sQ0FBQ0csSUFBSSxDQUFPLGVBQ3JEO0lBQUssU0FBUyxFQUFDO0VBQW9CLEdBQUMsY0FBWSxFQUFDSCxNQUFNLENBQUNJLFVBQVUsQ0FBTyxDQUVyRTtBQUVWLENBQUM7QUFBQSxlQUVjTCxVQUFVO0FBQUEifQ==