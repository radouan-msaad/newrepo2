var int;
 var k=0;
	var  idstart =[200,0];
	var point=0;
	 var nrt=120;
  	var nrl=60;
      window.addEventListener("keydown",function(){
      var key;
      if(window.event){
        key=event.which||event.keycode;
      }
      var block=document.getElementsByClassName('block');
      for(var r=0;r<5;r++){
    block[r].style.backgroundColor="green";
       }
       if(key=="39")
        down('right');
        else if(key=="38")
        down('top');
        else if(key=="40")
        down('bttom');
    });

   function down(go){
    var block=document.getElementsByClassName('block');
    for(var r=0;r<5;r++){
    block[r].style.backgroundColor="green";
       }
     document.getElementById("start").style.backgroundColor="yellow";
     clearInterval(int);
     var down=document.getElementById("start");
     int=setInterval(function(){    
if(go=='top'){
     var  top = idstart[0]*1;
     top = top-20;
     document.getElementById("start").style.top=top+"px";
     idstart[0]=top;
}
if(go=='bttom'){
     var  top = idstart[0]*1;
     top = top+20;
     document.getElementById("start").style.top=top+"px";
     idstart[0]=top;
}
if(go=='left'){
     var left = idstart[1]*1;
     left = left-20;
     document.getElementById("start").style.left=left+"px";
     idstart[1]=left;
}
if(go=='right'){
     var left = idstart[1]*1;
     left = left+20;
     document.getElementById("start").style.left= left +"px";
     idstart[1]= left ;
}
if(((idstart[1]>140)&&(idstart[1]<320)&&(idstart[0]>60))||(idstart[0]>200)||((idstart[0]<200)&&((idstart[1]<140)||(idstart[1]>320)))||(((idstart[1]>120)&&(idstart[1]<340))&&idstart[0]<60)||(idstart[1]<0)){
  var res=document.getElementById("res");
  res.innerHTML="vous avez perdu!";
  clearInterval(int);
  
  for(var r=0;r<5;r++){
    block[r].style.backgroundColor="red";
  }
  res.innerHTML="vous avez perdu!";
  document.getElementById("start").style.backgroundColor="orange";
  var t=setTimeout(function(){
  document.getElementById("start").style.left="0px";
  idstart[1]= 0 ;
  document.getElementById("start").style.top="200px";
  idstart[0]=200;
  for(var r=0;r<5;r++){
    block[r].style.backgroundColor="steelblue";
  }
  document.getElementById("start").style.backgroundColor="lime";
 res.innerHTML="bonne chance!";},1500);
}
if((idstart[1]>440)&&(idstart[0]>180)){
	clearInterval(int);
document.getElementById("start").style.backgroundColor="violet";
document.getElementById("res").innerHTML="vous avez gagn&eacute;";
		for(var r=0;r<5;r++){
    block[r].style.backgroundColor="aqua";
       }
var t=setTimeout(function(){
  for(var r=0;r<5;r++){
    block[r].style.backgroundColor="steelblue";
       }
    document.getElementById("start").style.backgroundColor="lime";
    document.getElementById("start").style.left="0px";
  idstart[1]=0 ;
},2000);
}
     },600); 
   }
   function stop(){
    var s=document.getElementById('start');
    s.style.backgroundColor="red";
   clearInterval(int);
}
