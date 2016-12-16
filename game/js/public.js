//获取元素；
function $(selector,context){
	context = context || document
	if(selector.charAt()==="#"){
		return context.getElementById(selector.substring(1));
	}else if(selector.charAt()==="."){
		return context.getElementsByClassName(selector.substring(1));
	}else{
		return context.getElementsByTagName(selector);
	} 
}

//		var box = $("#box");
//		console.log(box);
//		var list = $(".list");
//		console.log(list);
//		var li = $("li",list[0]);
//		console.log(li);