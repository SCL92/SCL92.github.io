window.onload=function(){
	var box =document.getElementById('box');
	var boxlist=box.getElementsByTagName("div");
	var colorArr=["green","blue","red","yellow"]
	var str="";
	for(var i=1;i<=100;i++){
		str=str+"<div>"+i+"</div>";
	}
	box.innerHTML=str;
	for(var i=0;i<100;i++){
		boxlist[i].style.backgroundColor=colorArr[i%colorArr.length];
		boxlist[i].onmousemove =function(){
			this.style.visibility="hidden";
		}
	}
	
	
}