(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/ad"],{

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

/***/ })

},[["./assets/js/ad.js","runtime","vendors~js/ad~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWQuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaW5kZXgiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidG1wbCIsImRhdGEiLCJyZXBsYWNlIiwiYXBwZW5kIiwiaGFuZGxlRGVsZXRlQnV0dG9ucyIsInRhcmdldCIsImRhdGFzZXQiLCJyZW1vdmUiLCJ1cGRhdGVDb3VudGVyIiwiY291bnQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsS0FBaEIsQ0FBc0IsWUFBVTtBQUM1QjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDRixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsRUFBZjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUg0QixDQUs1Qjs7QUFDQSxNQUFNSSxJQUFJLEdBQUdOLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTyxJQUFyQixDQUEwQixXQUExQixFQUF1Q0MsT0FBdkMsQ0FBK0MsV0FBL0MsRUFBNEROLEtBQTVELENBQWIsQ0FONEIsQ0FRNUI7QUFFQTs7QUFDQUYsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJTLE1BQXJCLENBQTRCSCxJQUE1QjtBQUVBTixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJELEtBQUssR0FBRyxDQUFsQyxFQWI0QixDQWU1Qjs7QUFDQVEscUJBQW1CO0FBQ3RCLENBakJEOztBQW9CQSxTQUFTQSxtQkFBVCxHQUE4QjtBQUUxQlYsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NDLEtBQWxDLENBQXdDLFlBQVU7QUFDOUMsUUFBTVUsTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUQsTUFBNUI7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlNLE1BQVo7QUFDQVgsS0FBQyxDQUFDVyxNQUFELENBQUQsQ0FBVUUsTUFBVjtBQUNILEdBSkQ7QUFNSDs7QUFBQTs7QUFFRCxTQUFTQyxhQUFULEdBQXdCO0FBQ3BCLE1BQU1DLEtBQUssR0FBRyxDQUFDZixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ2dCLE1BQW5EO0FBRUFoQixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJZLEtBQTFCO0FBQ0g7O0FBRURELGFBQWE7QUFFYkosbUJBQW1CLEciLCJmaWxlIjoianMvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcjYWRkLWltYWdlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAvL2plIHLDqWN1cMOocmUgbGVzIG51bWVyb3MgZGVzIGZ1dHVycyBjaGFtcHMgcXVlIGplIHZhaXMgY3LDqWVyXG4gICAgY29uc3QgaW5kZXggPSArJCgnI3dpZGdldHMtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgIC8vSmUgcsOpY3Vww6hyZSBsZSBwcm90b3R5cGUgZGVzIGVudHLDqWVzXG4gICAgY29uc3QgdG1wbCA9ICQoJyNhbm5vbmNlX2ltYWdlcycpLmRhdGEoJ3Byb3RvdHlwZScpLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgIC8vY29uc29sZS5sb2codG1wbCk7XG4gICAgXG4gICAgLy9KJ2luamVjdGUgbW9uIHRlbXBsYXRlIGRhbnMgbGEgZGl2XG4gICAgJCgnI2Fubm9uY2VfaW1hZ2VzJykuYXBwZW5kKHRtcGwpO1xuXG4gICAgJCgnI3dpZGdldHMtY291bnRlcicpLnZhbChpbmRleCArIDEpO1xuXG4gICAgLy9KZSBnw6hyZSBsZSBib3V0dG9uIHN1cHByaW1lciBcbiAgICBoYW5kbGVEZWxldGVCdXR0b25zKCk7XG59KTtcblxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25zKCl7XG5cbiAgICAkKCdidXR0b25bZGF0YS1hY3Rpb249XCJkZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAkKHRhcmdldCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKXtcbiAgICBjb25zdCBjb3VudCA9ICskKCcjYW5ub25jZV9pbWFnZXMgZGl2LmZvcm0tZ3JvdXAnKS5sZW5ndGg7XG5cbiAgICAkKCcjd2lkZ2V0cy1jb3VudGVyJykudmFsKGNvdW50KTtcbn1cblxudXBkYXRlQ291bnRlcigpXG5cbmhhbmRsZURlbGV0ZUJ1dHRvbnMoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9