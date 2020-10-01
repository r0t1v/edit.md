const { remote } = require('electron');
const win = remote.getCurrentWindow();

var btnminimize = document.querySelector('.winminimize');
btnminimize.addEventListener('click', function() {
      win.minimize();
      console.log("chegou!");
});

var a = document.querySelector('#winclose');
a.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#winclose").src = "src/assets/closefocus.png";
},false);
a.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#winclose").src = "src/assets/close.png";
},false);
var b =  document.querySelector('#winmaximize');
b.addEventListener('mouseover', function (event) {
   event.preventDefault();
   document.querySelector('#winmaximize').src = "src/assets/maximizefocus.png";
},false);
b.addEventListener('mouseout', function (event) {
   event.preventDefault();
   document.querySelector('#winmaximize').src = "src/assets/maximize.png";
},false);
var c = document.querySelector('#winminimize');
c.addEventListener('mouseover', function (event) {
   event.preventDefault();
   document.querySelector('#winminimize').src = "src/assets/minimizefocus.png";
},false);
 c.addEventListener('mouseout', function (event) {
   event.preventDefault();
   document.querySelector('#winminimize').src = "src/assets/minimize.png";
},false);
