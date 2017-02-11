$(document).ready(function() {
  var toggleFn = function () { $(this).toggleClass('inverted'); };
  $('.click').on({
    'mousedown': toggleFn,
    'mouseup': toggleFn
  });
});