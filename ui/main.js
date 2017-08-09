console.log('Loaded!');

var img=document.getElementById('madi');

function moveRight()
{ img.style.marginLeft=marginLeft+100;
   marginLeft=marginLeft+'px';
}

img.onclick(function(){
var interval=setInterval(moveRight,100);
});