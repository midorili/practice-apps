"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _jquery = _interopRequireDefault(require("jquery"));
var _client = require("react-dom/client");
var _GlossaryList = _interopRequireDefault(require("./GlossaryList"));
var _GlossaryListEntry = _interopRequireDefault(require("./GlossaryListEntry"));
var _FilterList = _interopRequireDefault(require("./FilterList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var App = function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    word = _useState4[0],
    setWord = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    definition = _useState6[0],
    setDefinition = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    filter = _useState8[0],
    setFilter = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    filterResults = _useState10[0],
    setFilterResults = _useState10[1];

  // const onChange = (e) => {
  //   setWord(e.target.value)
  //   setDefinition(e.target.value)
  // }

  var search = function search(word, definition) {
    //ajax calls here

    console.log("".concat(word, " and ").concat(definition, " were submitted"));
    _jquery["default"].ajax({
      url: "http://localhost:3000/glossary",
      method: "POST",
      data: {
        word: word,
        definition: definition
      },
      success: function success() {
        console.log('successFromSearch');
      },
      error: function error() {
        console.log('errorPost');
      }
    });
  };
  var filterWord = function filterWord(filter) {
    //ajax calls here

    console.log("".concat(filter, " was submitted"));
    _jquery["default"].ajax({
      url: "http://localhost:3000/glossary/filter",
      method: "POST",
      data: {
        filter: filter
      },
      success: function success() {
        console.log('successFromSearch');
        _jquery["default"].ajax({
          url: "http://localhost:3000/glossary/filter",
          method: "GET",
          success: function success(data) {
            console.log('success from filter', data);
            setFilterResults(data);
          },
          error: function error() {
            console.log('error filtering');
          }
        });
      },
      error: function error() {
        console.log('errorPost');
      }
    });
  };
  var load = function load() {
    //ajax calls here
    _jquery["default"].ajax({
      url: "http://localhost:3000/glossary",
      method: "GET",
      success: function success(data) {
        console.log('successFromLoad');
        setWords(data);
      },
      error: function error() {
        console.log('errorGet');
      }
    });
  };
  (0, _react.useEffect)(function () {
    load();
    console.log('isitworking?');
  }, words);
  return /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement("h1", null, "Glossary App"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Word"), /*#__PURE__*/React.createElement("input", {
    id: "word",
    type: "text",
    value: word,
    onChange: function onChange(event) {
      event.preventDefault();
      setWord(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", null, "Definition"), /*#__PURE__*/React.createElement("input", {
    id: "description",
    type: "text",
    value: definition,
    onChange: function onChange(event) {
      event.preventDefault();
      setDefinition(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "submit",
    onClick: function onClick(event) {
      event.preventDefault();
      search(word, definition);
    }
  }, " Submit")), /*#__PURE__*/React.createElement("div", {
    className: "words-list"
  }, /*#__PURE__*/React.createElement(_GlossaryList["default"], {
    words: words
  })), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Filter"), /*#__PURE__*/React.createElement("input", {
    id: "filter",
    value: filter,
    onChange: function onChange(event) {
      event.preventDefault();
      setFilter(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "submit-filter",
    onClick: function onClick(event) {
      event.preventDefault();
      filterWord(filter);
    }
  }, "Filter Here")), /*#__PURE__*/React.createElement("div", {
    className: "words-list"
  }, /*#__PURE__*/React.createElement(_FilterList["default"], {
    filter: filterResults
  })));
};
var container = document.getElementById('root');
var root = (0, _client.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render( /*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJ3b3JkIiwic2V0V29yZCIsImRlZmluaXRpb24iLCJzZXREZWZpbml0aW9uIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmlsdGVyUmVzdWx0cyIsInNldEZpbHRlclJlc3VsdHMiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiZmlsdGVyV29yZCIsImxvYWQiLCJ1c2VFZmZlY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEdsb3NzYXJ5TGlzdCBmcm9tICcuL0dsb3NzYXJ5TGlzdCdcbmltcG9ydCBHbG9zc2FyeUxpc3RFbnRyeSBmcm9tICcuL0dsb3NzYXJ5TGlzdEVudHJ5J1xuaW1wb3J0IEZpbHRlckxpc3QgZnJvbSAnLi9GaWx0ZXJMaXN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2RlZmluaXRpb24sIHNldERlZmluaXRpb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZpbHRlclJlc3VsdHMsIHNldEZpbHRlclJlc3VsdHNdID0gdXNlU3RhdGUoW10pXG5cblxuXG5cbiAgLy8gY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAvLyAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpXG4gIC8vICAgc2V0RGVmaW5pdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgLy8gfVxuXG4gIGNvbnN0IHNlYXJjaCA9ICh3b3JkLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgLy9hamF4IGNhbGxzIGhlcmVcblxuICAgIGNvbnNvbGUubG9nKGAke3dvcmR9IGFuZCAke2RlZmluaXRpb259IHdlcmUgc3VibWl0dGVkYClcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nbG9zc2FyeVwiLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgd29yZDogd29yZCxcbiAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NGcm9tU2VhcmNoJylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JQb3N0JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgICAvL2FqYXggY2FsbHMgaGVyZVxuXG4gICAgY29uc29sZS5sb2coYCR7ZmlsdGVyfSB3YXMgc3VibWl0dGVkYClcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nbG9zc2FyeS9maWx0ZXJcIixcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcjogZmlsdGVyXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc0Zyb21TZWFyY2gnKVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2xvc3NhcnkvZmlsdGVyXCIsXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBmcm9tIGZpbHRlcicsIGRhdGEpXG4gICAgICAgICAgICBzZXRGaWx0ZXJSZXN1bHRzKGRhdGEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZpbHRlcmluZycpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvclBvc3QnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgLy9hamF4IGNhbGxzIGhlcmVcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nbG9zc2FyeVwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NGcm9tTG9hZCcpXG4gICAgICAgIHNldFdvcmRzKGRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yR2V0JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkKClcbiAgICBjb25zb2xlLmxvZygnaXNpdHdvcmtpbmc/JylcbiAgfSwgd29yZHMpXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICA8aDE+R2xvc3NhcnkgQXBwPC9oMT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+V29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIndvcmRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHNldFdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKSB9fT48L2lucHV0PlxuICAgICAgICB7LyogPGlucHV0IGlkPVwid29yZFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dvcmR9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRXb3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+ICovfVxuXG4gICAgICAgIDxsYWJlbD5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZWZpbml0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHNldERlZmluaXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKSB9fT48L2lucHV0PlxuICAgICAgICB7LyogPGlucHV0IGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZWZpbml0aW9ufSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RGVmaW5pdGlvbihldmVudC50YXJnZXQudmFsdWUpfT48L2lucHV0PiAqL31cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhldmVudCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBzZWFyY2god29yZCwgZGVmaW5pdGlvbikgfX0+IFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jkcy1saXN0XCI+XG4gICAgICAgIDxHbG9zc2FyeUxpc3Qgd29yZHM9e3dvcmRzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPkZpbHRlcjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImZpbHRlclwiIHZhbHVlPXtmaWx0ZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgc2V0RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSkgfX0+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtZmlsdGVyXCIgb25DbGljaz17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGZpbHRlcldvcmQoZmlsdGVyKSB9fT5GaWx0ZXIgSGVyZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jkcy1saXN0XCI+XG4gICAgICAgIDxGaWx0ZXJMaXN0IGZpbHRlcj17ZmlsdGVyUmVzdWx0c30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgKVxufVxuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpOyAvLyBjcmVhdGVSb290KGNvbnRhaW5lciEpIGlmIHlvdSB1c2UgVHlwZVNjcmlwdFxucm9vdC5yZW5kZXIoPEFwcCAvPik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdEMsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQUcsR0FBUztFQUNoQixnQkFBMEIsSUFBQUMsZUFBUSxFQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9CQyxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsaUJBQXdCLElB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