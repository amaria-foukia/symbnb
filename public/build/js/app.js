(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/ad.js":
/*!*************************!*\
  !*** ./assets/js/ad.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$('#add-image').click(function () {
  //je récupère les numeros des futurs champs que je vais créer
  var index = +$('#widgets-counter').val();
  console.log(index); //Je récupère le prototype des entrées

  var tmpl = $('#annonce_images').data('prototype').replace(/__name__/g, index); //console.log(tmpl);
  //J'injecte mon template dans la div

  $('#annonce_images').append(tmpl);
  $('#widgets-counter').val(index + 1); //Je gère le boutton supprimer 

  handleDeleteButtons();
});

function handleDeleteButtons() {
  $('button[data-action="delete"]').click(function () {
    var target = this.dataset.target;
    console.log(target);
    $(target).remove();
  });
}

;

function updateCounter() {
  var count = +$('#annonce_images div.form-group').length;
  $('#widgets-counter').val(count);
}

updateCounter();
handleDeleteButtons();

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
//require('../css/app.scss');
// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
global.$ = global.jQuery = $;

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! ./ad.js */ "./assets/js/ad.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~js/ad~js/app","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJpbmRleCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0bXBsIiwiZGF0YSIsInJlcGxhY2UiLCJhcHBlbmQiLCJoYW5kbGVEZWxldGVCdXR0b25zIiwidGFyZ2V0IiwiZGF0YXNldCIsInJlbW92ZSIsInVwZGF0ZUNvdW50ZXIiLCJjb3VudCIsImxlbmd0aCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsS0FBaEIsQ0FBc0IsWUFBVTtBQUM1QjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDRixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsRUFBZjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUg0QixDQUs1Qjs7QUFDQSxNQUFNSSxJQUFJLEdBQUdOLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTyxJQUFyQixDQUEwQixXQUExQixFQUF1Q0MsT0FBdkMsQ0FBK0MsV0FBL0MsRUFBNEROLEtBQTVELENBQWIsQ0FONEIsQ0FRNUI7QUFFQTs7QUFDQUYsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJTLE1BQXJCLENBQTRCSCxJQUE1QjtBQUVBTixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJELEtBQUssR0FBRyxDQUFsQyxFQWI0QixDQWU1Qjs7QUFDQVEscUJBQW1CO0FBQ3RCLENBakJEOztBQW9CQSxTQUFTQSxtQkFBVCxHQUE4QjtBQUUxQlYsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NDLEtBQWxDLENBQXdDLFlBQVU7QUFDOUMsUUFBTVUsTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUQsTUFBNUI7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlNLE1BQVo7QUFDQVgsS0FBQyxDQUFDVyxNQUFELENBQUQsQ0FBVUUsTUFBVjtBQUNILEdBSkQ7QUFNSDs7QUFBQTs7QUFFRCxTQUFTQyxhQUFULEdBQXdCO0FBQ3BCLE1BQU1DLEtBQUssR0FBRyxDQUFDZixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ2dCLE1BQW5EO0FBRUFoQixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJZLEtBQTFCO0FBQ0g7O0FBRURELGFBQWE7QUFFYkosbUJBQW1CLEc7Ozs7Ozs7Ozs7O0FDdENuQjs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0EsSUFBTVYsQ0FBQyxHQUFHaUIsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFFQWIsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVo7QUFFQWEsTUFBTSxDQUFDbEIsQ0FBUCxHQUFXa0IsTUFBTSxDQUFDQyxNQUFQLEdBQWdCbkIsQ0FBM0I7O0FBRUFpQixtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsa0NBQUQsQ0FBUCxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJyNhZGQtaW1hZ2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIC8vamUgcsOpY3Vww6hyZSBsZXMgbnVtZXJvcyBkZXMgZnV0dXJzIGNoYW1wcyBxdWUgamUgdmFpcyBjcsOpZXJcbiAgICBjb25zdCBpbmRleCA9ICskKCcjd2lkZ2V0cy1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgLy9KZSByw6ljdXDDqHJlIGxlIHByb3RvdHlwZSBkZXMgZW50csOpZXNcbiAgICBjb25zdCB0bXBsID0gJCgnI2Fubm9uY2VfaW1hZ2VzJykuZGF0YSgncHJvdG90eXBlJykucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgLy9jb25zb2xlLmxvZyh0bXBsKTtcbiAgICBcbiAgICAvL0onaW5qZWN0ZSBtb24gdGVtcGxhdGUgZGFucyBsYSBkaXZcbiAgICAkKCcjYW5ub25jZV9pbWFnZXMnKS5hcHBlbmQodG1wbCk7XG5cbiAgICAkKCcjd2lkZ2V0cy1jb3VudGVyJykudmFsKGluZGV4ICsgMSk7XG5cbiAgICAvL0plIGfDqHJlIGxlIGJvdXR0b24gc3VwcHJpbWVyIFxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbnMoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbnMoKXtcblxuICAgICQoJ2J1dHRvbltkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpe1xuICAgIGNvbnN0IGNvdW50ID0gKyQoJyNhbm5vbmNlX2ltYWdlcyBkaXYuZm9ybS1ncm91cCcpLmxlbmd0aDtcblxuICAgICQoJyN3aWRnZXRzLWNvdW50ZXInKS52YWwoY291bnQpO1xufVxuXG51cGRhdGVDb3VudGVyKClcblxuaGFuZGxlRGVsZXRlQnV0dG9ucygpO1xuXG5cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLy9yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxucmVxdWlyZSgnLi9hZC5qcycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==