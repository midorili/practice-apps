"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _jquery = _interopRequireDefault(require("jquery"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GlossaryListEntry = function GlossaryListEntry(_ref) {
  var word = _ref.word;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    updatedWord = _useState2[0],
    setUpdate = _useState2[1];
  // const [deleteWord, setDeleted] = useState('')

  console.log('wordhere', word);
  var edit = function edit(updatedWord) {
    console.log("".concat(updatedWord, " was searched"));
    _jquery["default"].ajax({
      url: "http://localhost:3000/glossary",
      method: "PUT",
      data: {
        word: updatedWord,
        definition: word.definition
      },
      success: function success() {
        console.log('successfully updated');
      },
      error: function error() {
        console.log('error updating');
      }
    });
  };
  var deleteWord = '';
  var find = function find() {
    var deleted = document.getElementsByClassName("word")[0].textContent.slice(5);
    console.log('deleted', deleted);
    deleteWord = deleted;
  };
  var deleted = function deleted(deleteWord) {
    console.log("".concat(deleteWord, " was deleted"));
    _jquery["default"].ajax({
      url: "http://localhost:3000/glossary",
      method: "DELETE",
      data: {
        deleteWord: deleteWord
      },
      success: function success() {
        console.log('successfully deleted');
      },
      error: function error() {
        console.log('error deleting');
      }
    });
  };

  // const toggle = () => {
  //   console.log('toggled')
  // }

  return /*#__PURE__*/React.createElement("div", {
    className: "word-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "word"
  }, "Word: ", word.word), /*#__PURE__*/React.createElement("div", {
    className: "definition"
  }, "Definition: ", word.definition), /*#__PURE__*/React.createElement("button", {
    className: "edit",
    onClick: function onClick(event) {
      event.preventDefault();
      edit(updatedWord);
    }
  }, " Edit"), /*#__PURE__*/React.createElement("div", {
    id: "hidden"
  }, " ", /*#__PURE__*/React.createElement("input", {
    className: "edit-box",
    type: "text",
    onChange: function onChange(event) {
      event.preventDefault();
      setUpdate(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "delete",
    onClick: function onClick(event) {
      event.preventDefault();
      find();
      deleted(deleteWord);
    }
  }, " Delete"));
};
var _default = GlossaryListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHbG9zc2FyeUxpc3RFbnRyeSIsIndvcmQiLCJ1c2VTdGF0ZSIsInVwZGF0ZWRXb3JkIiwic2V0VXBkYXRlIiwiY29uc29sZSIsImxvZyIsImVkaXQiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkZWZpbml0aW9uIiwic3VjY2VzcyIsImVycm9yIiwiZGVsZXRlV29yZCIsImZpbmQiLCJkZWxldGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJzbGljZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy9HbG9zc2FyeUxpc3RFbnRyeS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgR2xvc3NhcnlMaXN0RW50cnkgPSAoeyB3b3JkIH0pID0+IHtcbiAgY29uc3QgW3VwZGF0ZWRXb3JkLCBzZXRVcGRhdGVdID0gdXNlU3RhdGUoJycpXG4gIC8vIGNvbnN0IFtkZWxldGVXb3JkLCBzZXREZWxldGVkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnNvbGUubG9nKCd3b3JkaGVyZScsIHdvcmQpXG4gIGNvbnN0IGVkaXQgPSAodXBkYXRlZFdvcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHt1cGRhdGVkV29yZH0gd2FzIHNlYXJjaGVkYClcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nbG9zc2FyeVwiLFxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICB3b3JkOiB1cGRhdGVkV29yZCxcbiAgICAgICAgZGVmaW5pdGlvbjogd29yZC5kZWZpbml0aW9uXG4gICAgICB9LFxuXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgdXBkYXRlZCcpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHVwZGF0aW5nJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHZhciBkZWxldGVXb3JkID0gJyc7XG5cbiAgY29uc3QgZmluZCA9ICgpID0+IHtcbiAgICB2YXIgZGVsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3b3JkXCIpWzBdLnRleHRDb250ZW50LnNsaWNlKDUpXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZWQnLCBkZWxldGVkKVxuICAgIGRlbGV0ZVdvcmQgPSBkZWxldGVkXG4gIH1cblxuICBjb25zdCBkZWxldGVkID0gKGRlbGV0ZVdvcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtkZWxldGVXb3JkfSB3YXMgZGVsZXRlZGApXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2xvc3NhcnlcIixcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGVsZXRlV29yZDogZGVsZXRlV29yZFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBkZWxldGVkJylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZGVsZXRpbmcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ3RvZ2dsZWQnKVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmQtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCI+V29yZDoge3dvcmQud29yZH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmaW5pdGlvblwiPkRlZmluaXRpb246IHt3b3JkLmRlZmluaXRpb259PC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVkaXRcIiBvbkNsaWNrPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgZWRpdCh1cGRhdGVkV29yZCkgfX0+IEVkaXQ8L2J1dHRvbj5cbiAgICAgIDxkaXYgaWQ9XCJoaWRkZW5cIj4gPGlucHV0IGNsYXNzTmFtZT1cImVkaXQtYm94XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHNldFVwZGF0ZShldmVudC50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+PC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eyhldmVudCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBmaW5kKCk7IGRlbGV0ZWQoZGVsZXRlV29yZCkgfX0+IERlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBHbG9zc2FyeUxpc3RFbnRyeTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXZCLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsT0FBaUI7RUFBQSxJQUFYQyxJQUFJLFFBQUpBLElBQUk7RUFDL0IsZ0JBQWlDLElBQUFDLGVBQVEsRUFBQyxFQUFFLENBQUM7SUFBQTtJQUF0Q0MsV0FBVztJQUFFQyxTQUFTO0VBQzdCOztFQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVMLElBQUksQ0FBQztFQUM3QixJQUFN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