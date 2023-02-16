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
      word: word,
      key: word.name
    });
  }));
};
var _default = GlossaryList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHbG9zc2FyeUxpc3QiLCJ3b3JkcyIsIm1hcCIsIndvcmQiLCJuYW1lIl0sInNvdXJjZXMiOlsiLi4vc3JjL0dsb3NzYXJ5TGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEdsb3NzYXJ5TGlzdEVudHJ5IGZyb20gJy4vR2xvc3NhcnlMaXN0RW50cnknO1xuXG5jb25zdCBHbG9zc2FyeUxpc3QgPSAoeyB3b3JkcyB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCd3Jywgd29yZHMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb3NzYXJ5LWxpc3RcIj5cbiAgICAgIHt3b3Jkcy5tYXAoKHdvcmQpID0+IHtcblxuICAgICAgICByZXR1cm4gPCBHbG9zc2FyeUxpc3RFbnRyeSB3b3JkPXt3b3JkfSBrZXk9e3dvcmQubmFtZX0gLz5cbiAgICAgIH0pfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvc3NhcnlMaXN0OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQW9EO0FBRXBELElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZLE9BQWtCO0VBQUEsSUFBWkMsS0FBSyxRQUFMQSxLQUFLO0VBQzNCOztFQUVBLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQWUsR0FDM0JBLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBSztJQUVuQixvQkFBTyxvQkFBRSw2QkFBaUI7TUFBQyxJQUFJLEVBQUVBLElBQUs7TUFBQyxHQUFHLEVBQUVBLElBQUksQ0FBQ0M7SUFBSyxFQUFHO0VBQzNELENBQUMsQ0FBQyxDQUVFO0FBRVYsQ0FBQztBQUFBLGVBRWNKLFlBQVk7QUFBQSJ9