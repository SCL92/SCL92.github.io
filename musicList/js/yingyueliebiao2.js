window.onload=function(){
	var mine=document.getElementById("mine");
	var lis=mine.getElementsByTagName("li");
	var inputs=mine.getElementsByTagName("input");
	var all=document.getElementById("all");
	var num=0;
	for(var i=0 ;i<lis.length; i++){
		if(i%2==0){
			lis[i].className="blue";
			lis[i].bg="blue"
		}else{
			lis[i].className="white";
		}
//		lis[i].onmouseover =function(){
//			this.className="gray";
//		}
//		lis[i].onmouseout=function(){
//			this.className=this.bg;
//		}
		console.log(lis[i])
	}
	
	all.onclick= function(){
		for(var i=0;i<inputs.length;i++){
			if(this.checked){
				inputs[i].checked=true;
				lis[i].className="gray"
			}else{
				inputs[i].checked=false;
				lis[i].className=lis[i].bg;
			}
		}
	}
	for(var i=0;i<inputs.length;i++){
		inputs[i].index=i;
		inputs[i].onclick=function(){
			if(this.checked==true){
				lis[this.index].className="gray";
				
			}else{
				lis[this.index].className=lis[this.index].bg;
			}
			num=0;
			for(var i=0;i<inputs.length;i++){
				if(inputs[i].checked){
					num++;
				}
			}
			if(num==inputs.length){
				all.checked=true;
				
			}else{
				all.checked=false;
			}
			
		}
	}
	
	
}
