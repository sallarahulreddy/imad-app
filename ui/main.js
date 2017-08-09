console.log('Loaded!');

var img=document.getElementById('madi');

function moveRight()
{ img.style.marginLeft=marginLeft+'px';
   marginLeft=marginLeft+10;
}

img.onclick=function(){
var interval=setInterval(moveRight,100);
};