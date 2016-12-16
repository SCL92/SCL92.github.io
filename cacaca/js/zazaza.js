window.onload=function(){
	var box =document.getElementById("box")
	var boxList=box.getElementsByTagName("div")
	var str="";
	var num=0;
	for(var i=0;i<100;i++){
		str=str+'<div style="left:'+(i%10)*60+'px;top:'+(i-i%10)*6+'px;"></div>'
	}
	box.innerHTML=str;
	for(var i =0;i<100;i++){
		if(1%10==0){
			num++;
		}
		boxList[i].style.backgroundPositionX=-(i%10)*60+'px';
		boxList[i].style.backgroundPositionY=-(i-i%10)*6+'px';
		boxList[i].onmouseover =function(){
//			this.style.backgroundColor="blue";
			this.className="pic";
			this.style.width="100px";
			this.style.height="100px";
			this.style.transition="3s";
//			this.style.transform=" scale(0)"
			
		}
	}
}
