var imgUrl = 'images/rabbit.png';
var positions = ['0 -697', '-174 -697', '-349 -697', '-524 -697', '-698 -697', '-873 -694'];
var ele = document.getElementById("rabbit");

var animation = window.animation;

var repeatAnimation = animation().loadImg([imgUrl]).changePosition(ele, positions, imgUrl).repeatForever();
repeatAnimation.start(80)