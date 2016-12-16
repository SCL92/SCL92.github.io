window.onload=function(){
	var box=document.getElementsByTagName("div")
	var str="";
	for(var i=0;i<10;i++){
		for (var j = 0; j<10; j++) {
			str += '<div style="left:'+(i*60)+'px;top:'+(j*60)+'px">'+j+i+'</div>';
		}
	}
	document.body.innerHTML=str;
}