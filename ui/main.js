console.log('Loaded!');

var img=document.getElementById('madi');

function moveRight()
{ var marginleft=marginleft+100;
   marginleft=marginleft+'px';
}

img.click(function(){
var interval=setInterval(moveRight,100);
});