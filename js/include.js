document.addEventListener('DOMContentLoaded', function () {
  fetch('/header.html').then(function (r) { return r.text(); }).then(function (html) {
    document.getElementById('header-placeholder').innerHTML = html;
  });
  fetch('/footer.html').then(function (r) { return r.text(); }).then(function (html) {
    document.getElementById('footer-placeholder').innerHTML = html;
  });
});
