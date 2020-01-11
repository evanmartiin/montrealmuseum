// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

function searchDistrict() {
  var x = document.getElementById("district");
  var district = x.options[x.selectedIndex].value;
  if (district != 0) {
    window.location.href='/districts/' + district;
  }
}

function searchCategory(num) {
  window.location.href='/categories/' + num;
}

window.setInterval(function(){
  if (document.body.clientWidth >= 1100) {
    var x = document.getElementById('burgerMenu');
    var y = document.getElementById('crossMenu');
    var menu = document.getElementById('menu');
    var u = document.getElementById('navMobile');
    u.style.display = "none";
    x.style.display = 'none';
    y.style.display = 'none';
    menu.style.display = 'none';
    menu.style.top = '-100vh';
  }
  else if (document.body.clientWidth < 1100) {
    var x = document.getElementById('burgerMenu');
    var y = document.getElementById('crossMenu');
    var menu = document.getElementById('menu');
    var u = document.getElementById('navMobile');
    u.style.display = "block";
    x.style.display = 'block';
    y.style.display = 'none';
    menu.style.display = 'none';
    menu.style.top = '-100vh';
  }
}, 500);

function burger() {
  var x = document.getElementById('burgerMenu');
  var y = document.getElementById('crossMenu');
  x.style.display = 'none';
  y.style.display = 'block';
  var menu = document.getElementById('menu');
  menu.style.display = "block";
  menu.style.animation = 'menuE 1s ease';
  menu.style.top = '0vh';
  var u = document.getElementById('navMobile');
  u.style.display = "block";
  u.style.animation = 'menuE 1s ease';
  u.style.top = '0vh';
}

function cross() {
  var x = document.getElementById('burgerMenu');
  var y = document.getElementById('crossMenu');
  x.style.display = 'block';
  y.style.display = 'none';
  var menu = document.getElementById('menu');
  menu.style.display = "block";
  menu.style.animation = 'menuD 1s ease';
  menu.style.top = '-100vh';
  var u = document.getElementById('navMobile');
  u.style.display = "block";
  u.style.animation = 'menuD 1s ease';
  u.style.top = '-100vh';
}
