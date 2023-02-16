"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _jquery = _interopRequireDefault(require("jquery"));
var _client = require("react-dom/client");
var _GlossaryList = _interopRequireDefault(require("./GlossaryList"));
var _GlossaryListEntry = _interopRequireDefault(require("./GlossaryListEntry"));
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
  })));
};
var container = document.getElementById('root');
var root = (0, _client.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render( /*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJ3b3JkIiwic2V0V29yZCIsImRlZmluaXRpb24iLCJzZXREZWZpbml0aW9uIiwic2VhcmNoIiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImxvYWQiLCJ1c2VFZmZlY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEdsb3NzYXJ5TGlzdCBmcm9tICcuL0dsb3NzYXJ5TGlzdCdcbmltcG9ydCBHbG9zc2FyeUxpc3RFbnRyeSBmcm9tICcuL0dsb3NzYXJ5TGlzdEVudHJ5J1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZGVmaW5pdGlvbiwgc2V0RGVmaW5pdGlvbl0gPSB1c2VTdGF0ZSgnJylcblxuXG5cbiAgLy8gY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAvLyAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpXG4gIC8vICAgc2V0RGVmaW5pdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgLy8gfVxuXG4gIGNvbnN0IHNlYXJjaCA9ICh3b3JkLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgLy9hamF4IGNhbGxzIGhlcmVcblxuICAgIGNvbnNvbGUubG9nKGAke3dvcmR9IGFuZCAke2RlZmluaXRpb259IHdlcmUgc3VibWl0dGVkYClcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nbG9zc2FyeVwiLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgd29yZDogd29yZCxcbiAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NGcm9tU2VhcmNoJylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JQb3N0JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAvL2FqYXggY2FsbHMgaGVyZVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dsb3NzYXJ5XCIsXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc0Zyb21Mb2FkJylcbiAgICAgICAgc2V0V29yZHMoZGF0YSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JHZXQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWQoKVxuICAgIGNvbnNvbGUubG9nKCdpc2l0d29ya2luZz8nKVxuICB9LCB3b3JkcylcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgIDxoMT5HbG9zc2FyeSBBcHA8L2gxPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5Xb3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwid29yZFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgc2V0V29yZChldmVudC50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+XG4gICAgICAgIHsvKiA8aW5wdXQgaWQ9XCJ3b3JkXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17d29yZH0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldFdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD4gKi99XG5cbiAgICAgICAgPGxhYmVsPkRlZmluaXRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RlZmluaXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgc2V0RGVmaW5pdGlvbihldmVudC50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+XG4gICAgICAgIHsvKiA8aW5wdXQgaWQ9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RlZmluaXRpb259IG9uQ2hhbmdlPXtldmVudCA9PiBzZXREZWZpbml0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+ICovfVxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCIgb25DbGljaz17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHNlYXJjaCh3b3JkLCBkZWZpbml0aW9uKSB9fT4gU3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRzLWxpc3RcIj5cbiAgICAgICAgPEdsb3NzYXJ5TGlzdCB3b3Jkcz17d29yZHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gIClcbn1cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTsgLy8gY3JlYXRlUm9vdChjb250YWluZXIhKSBpZiB5b3UgdXNlIFR5cGVTY3JpcHRcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQW1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVuRCxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2hCLGdCQUEwQixJQUFBQyxlQUFRLEVBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JDLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixpQkFBd0IsSUFBQUYsZUFBUSxFQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTdCRyxJQUFJO0lBQUVDLE9BQU87RUFDcEIsaUJBQW9DLElBQUFKLGVBQVEsRUFBQyxFQUFFLENBQUM7SUFBQTtJQUF6Q0ssVUFBVTtJQUFFQyxhQUFhOztFQUloQztFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTSxDQUFJSixJQUFJLEVBQUVFLFVBQVUsRUFBSztJQUNuQzs7SUFFQUcsT0FBTyxDQUFDQyxHQUFHLFdBQUlOLElBQUksa0JBQVFFLFVBQVUscUJBQWtCO0lBQ3ZESyxrQkFBQyxDQUFDQyxJQUFJLENBQUM7TUFDTEMsR0FBRyxFQUFFLGdDQUFnQztNQUNyQ0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFO1FBQ0pYLElBQUksRUFBRUEsSUFBSTtRQUNWRSxVQUFVLEVBQUVBO01BQ2QsQ0FBQztNQUNEVSxPQUFPLEVBQUUsbUJBQU07UUFDYlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDbEMsQ0FBQztNQUNETyxLQUFLLEVBQUUsaUJBQU07UUFDWFIsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQzFCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFJLEdBQVM7SUFDakI7SUFDQVAsa0JBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQ0xDLEdBQUcsRUFBRSxnQ0FBZ0M7TUFDckNDLE1BQU0sRUFBRSxLQUFLO01BQ2JFLE9BQU8sRUFBRSxpQkFBQ0QsSUFBSSxFQUFLO1FBQ2pCTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QlAsUUFBUSxDQUFDWSxJQUFJLENBQUM7TUFDaEIsQ0FBQztNQUNERSxLQUFLLEVBQUUsaUJBQU07UUFDWFIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ3pCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELElBQUFTLGdCQUFTLEVBQUMsWUFBTTtJQUNkRCxJQUFJLEVBQUU7SUFDTlQsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzdCLENBQUMsRUFBRVIsS0FBSyxDQUFDO0VBRVQsb0JBRUU7SUFBSyxTQUFTLEVBQUM7RUFBUSxnQkFDckIsZ0NBQUksY0FBWSxDQUFLLGVBQ3JCLCtDQUNFLG1DQUFPLE1BQUksQ0FBUSxlQUNuQjtJQUFPLEVBQUUsRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUVFLElBQUs7SUFBQyxRQUFRLEVBQUUsa0JBQUNnQixLQUFLLEVBQUs7TUFBRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7TUFBRWhCLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFDO0VBQUUsRUFBUyxlQUdoSSxtQ0FBTyxZQUFVLENBQVEsZUFDekI7SUFBTyxFQUFFLEVBQUMsYUFBYTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFFakIsVUFBVztJQUFDLFFBQVEsRUFBRSxrQkFBQ2MsS0FBSyxFQUFLO01BQUVBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO01BQUVkLGFBQWEsQ0FBQ2EsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFDO0VBQUUsRUFBUyxlQUduSjtJQUFRLFNBQVMsRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFLGlCQUFDSCxLQUFLLEVBQUs7TUFBRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7TUFBRWIsTUFBTSxDQUFDSixJQUFJLEVBQUVFLFVBQVUsQ0FBQztJQUFDO0VBQUUsR0FBQyxTQUFPLENBQVMsQ0FDaEgsZUFDUDtJQUFLLFNBQVMsRUFBQztFQUFZLGdCQUN6QixvQkFBQyx3QkFBWTtJQUFDLEtBQUssRUFBRUo7RUFBTSxFQUFHLENBQzFCLENBQ0Y7QUFJVixDQUFDO0FBR0QsSUFBTXNCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ2pELElBQU1DLElBQUksR0FBRyxJQUFBQyxrQkFBVSxFQUFDSixTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3BDRyxJQUFJLENBQUNFLE1BQU0sZUFBQyxvQkFBQyxHQUFHLE9BQUcsQ0FBQyJ9