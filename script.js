var current = document.querySelectorAll('.previous');
var next = document.querySelectorAll('.next');
var keycounter = document.getElementsByTagName('button')[0];
var valInput = "";
var arr = new Array(0,0,0,0,0);
var ctr = 0;
var pos = 0;
var interval;
keycounter.addEventListener('click', function() {
  valInput = parseInt(document.getElementById('value-box').value);
  if (valInput == NaN || valInput <= 0 || valInput > 99999) {
    alert("Please Fill in Correct Details! Enter Number between 1-99999 ");
  } else {
    if(interval!=undefined){
      claearMemory();
      pos=5;
      animate();
      pos=0;
    }
    interval=setInterval(loop,1000);
    current.innerText=0;
    next.innerText=0;
  }
});
function loop(){
  if(ctr<valInput){
    ctr++;
    console.log(ctr);
    pos=0;
    manipulateArray();
    animate();
  } else if(ctr==valInput){
    claearMemory();
  }
}
function claearMemory(){
  clearInterval(interval);
  ctr=0;
  arr=[0,0,0,0,0];
}
function manipulateArray(){
  let temp=ctr, i=4;
  while (temp!=0){
    arr[i]=temp%10;
    temp=Math.trunc(temp/10);
    i--;
  }
  if(ctr%10==0){
    pos=2;
  } else if (ctr%100==0){
    pos=3;
  } else if (ctr%1000==0){
    pos=4;
  }
    else if (ctr%10000==0){
    pos=5;
  } else if (ctr!=0) {
    pos=1;
  }
}
function animate(){
  for (let i =0; i<pos;i++){
      next[4-i].classList.add('animate');
      next[4-i].innerText=arr[4-i];
      setTimeout(function(){
        next[4-i].classList.remove('animate');
      },500);
      setTimeout(function(){
        current[4-i].innerText=arr[4-i];
      },500);
  }
}
