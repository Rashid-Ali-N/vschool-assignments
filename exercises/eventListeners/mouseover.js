const cordBox = document.getElementsByClassName('red-box')
var x = document.clientX;    
var y = document.clientY;
var coor = "X coords: " + x + ", Y coords: " + y;

document.addEventListener('mouseover', function(){
    cordBox.innerHTML = coor;
})

