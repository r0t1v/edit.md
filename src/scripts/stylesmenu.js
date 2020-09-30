(function (win, doc) {
    'use strict';
    var $a = document.querySelector('#winclose');
    $a.addEventListener('mouseover', function (event) {
        event.preventDefault();
       doc.querySelector("#winclose").src = "src/assets/closefocus.png";
    }, false);
    $a.addEventListener('mouseout', function (event) {
        event.preventDefault();
       doc.querySelector("#winclose").src = "src/assets/close.png";
    }, false);
    var $b =  doc.querySelector('#winmaximize');
    $b.addEventListener('mouseover', function (event){
    	 event.preventDefault();
    	 doc.querySelector('#winmaximize').src = "src/assets/maximizefocus.png"
    },false);
    $b.addEventListener('mouseout', function (event){
    	 event.preventDefault();
    	 doc.querySelector('#winmaximize').src = "src/assets/maximize.png"
    },false);
    var $c = doc.querySelector('#winminimize');
    $c.addEventListener('mouseover', function (event){
    	 event.preventDefault();
    	 doc.querySelector('#winminimize').src = "src/assets/minimizefocus.png"
    },false);
     $c.addEventListener('mouseout', function (event){
    	 event.preventDefault();
    	 doc.querySelector('#winminimize').src = "src/assets/minimize.png"
    },false);
}(window, document));
