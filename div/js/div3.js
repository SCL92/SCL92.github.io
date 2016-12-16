window.onload =function(){
	var boxlist=document.getElementsByTagName("div")
	var colorArr=["yellow","blue","green","red"]
	for(var i=1;i<100;i++){
		document.body.innerHTML=document.body.innerHTML+"<div>"+i+"</div>";
	}
	for(var i=0;i<100;i++){
		boxlist[i].style.left=(i%10)*60+"px";
		boxlist[i].style.top=(i-i%10)*6+"px";
		boxlist[i].onmousemove=function(){
			this.style.display="none";
		}
		
	}
	for(var i=0;i<boxlist.length;i++){
		boxlist[i].style.background = colorArr[i%colorArr.length]
	}
}
