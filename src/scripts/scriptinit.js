const { remote, app } = require('electron');
const init = remote.getCurrentWindow();

var x = document.querySelector('#closeinit');
x.addEventListener('click', function () {
    init.close();
},false);

var evtbclose = document.querySelector('#closeinit');
evtbclose.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#closeinit").src = "../src/assets/init/closeinitfocus.png";
},false);
evtbclose.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#closeinit").src = "../src/assets/init/closeinit.png";
},false);

var evtbabout = document.querySelector('#aboutinit');
evtbabout.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#aboutinit").src = "../src/assets/init/aboutinitfocus.png";
},false);
evtbabout.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#aboutinit").src = "../src/assets/init/aboutinit.png";
},false);

var evtbnewmd = document.querySelector('#newmd');
evtbnewmd.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#newmd").src = "../src/assets/init/newfilefocus.png";
},false);
evtbnewmd.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#newmd").src = "../src/assets/init/newfile.png";
},false);

var evtbopenmd = document.querySelector('#openmd');
evtbopenmd.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#openmd").src = "../src/assets/init/openfilefocus.png";
},false);
evtbopenmd.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#openmd").src = "../src/assets/init/openfile.png";
},false);
