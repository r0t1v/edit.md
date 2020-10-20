const { remote, app } = require('electron');
const win = remote.getCurrentWindow();

/*var btnminimize = document.querySelector('.winminimize');
btnminimize.addEventListener('click', function() {
      win.minimize();
});*/
var winController = document.querySelectorAll('.winicon');
const appImages = document.querySelectorAll('img');

appImages.forEach(image => {
  image.ondragstart = () => false;
});

winController.forEach((item) => {
  item.addEventListener('click', () => windowActions(item.classList[1]))
});

function windowActions(flag) {
  if (flag === "winclose"){
    win.close();
  }
  else if (flag === "winminimize"){
    win.minimize();
  }
  else if (flag === "winmaximize"){
      if (!win.isMaximized()){
        win.maximize();
      }else {
        win.unmaximize();
      }
  }
}
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
