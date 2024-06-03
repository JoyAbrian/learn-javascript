var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImage = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImage.style.width = imgWrap.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}