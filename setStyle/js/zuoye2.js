window.onload=function(){
	var btn=document.getElementById("btn");
	var bg=document.getElementById("bg");
	btn.onclick=function(){
		bg.style.display="block";
	}
	var li=bg.getElementsByTagName("li");
	var spans=bg.getElementsByTagName("span");
	var box=document.getElementById("box");
	

	for(var i=0;i<spans.length;i++){
		add(i);
	}
	function add(i){
		spans[i].onclick = function(){
			if(i==0){
				box.style.backgroundColor="red";
			}
			if(i==1){
				box.style.backgroundColor="yellow";
			}
			if(i==2){
				box.style.backgroundColor="blue";
			}
			if(i==3){
				box.style.width="200px";
			}
			if(i==4){
				box.style.width="300px";
			}
			if(i==5){
				box.style.width="400px";
			}
			if(i==6){
				box.style.height="200px";
			}
			if(i==7){
				box.style.height="300px";
			}
			if(i==8){
				box.style.height="400px";
			}
	
	}
	}
	var btnbox=document.getElementsByClassName("btnbox");
	var inputs=btnbox[0].getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		cut(i);
	}
	function cut(i){
		inputs[i].onclick=function(){
			if(i==0){
				bg.style="none";
				box.style="none";
			}
			if(i==1){
				bg.style="none";
			}
			
		}	
	}
	
}
