window.onload=function(){
	var box=document.getElementsByClassName("box");
//	var div =document.getElementsByTagName("div")
	var colorArr=["yellow","blue","green","red"]
	var str="";
	var num = 0;
	for(var i=0;i<100;i++){
//		if(i%10 ==0){
//			num++;
//		}
		str=str+'<div class="box" style="left:'+(i%10)*60+'px; top:'+(i-i%10)*6+'px; background:'+colorArr[i%colorArr.length]+';">'+(i+1)+'</div>';
	}
	document.body.innerHTML=str;
	for(var i=0;i<100;i++){
		box[i].onmouseover =function(){
//			this.style.display="none";
			this.style.transition="4s";
//			this.style.opacity="0";
			this.style.height="500px";
			this.style.width="500px";
			this.style.transform= "rotate(10000deg)";
			
		}
		
	
	}
	
}
