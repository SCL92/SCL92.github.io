window.onload =function (){
//	找到点击按钮
//	找到透明层div显示
	
    var btn = document . getElementById('btn');
    var bg = document . getElementById('bg');
    var red = document . getElementById("red");
    var box = document .getElementById("box");
    var yellow = document .getElementById("yellow");
    var blue = document .getElementById('blue');
    var gryw2 = document .getElementById("gryw2");
    var gryw3 = document . getElementById("gryw3");
    var gryw4 = document . getElementById("gryw4");
    var gryh2 = document .getElementById("gryh2");
    var gryh3 = document . getElementById("gryh3");
    var grywh4 = document . getElementById("gryh4");
    var zero = document . getElementById("zero");
    var ok = document . getElementById("ok");
    	btn.onclick=function(){
    		bg.style.display='block';
    	}
    	red.onclick=function(){
    		box.style . backgroundColor='red';
    	}
    	yellow.onclick=function(){
    		box.style . backgroundColor='yellow';
    	}
    	blue.onclick=function(){
    		box.style . backgroundColor='blue';
    	}
    	gryw2.onclick=function(){
    		box.style.width='200px';
    	}
    	gryw3.onclick=function(){
    		box.style.width='300px';
    	}
    	gryw4.onclick=function(){
    		box.style.width='400px';
    	}
    	gryh2.onclick=function(){
    		box.style.height='200px';
    	}
    	gryh3.onclick=function(){
    		box.style.height='300px';
    	}
    	gryh4.onclick=function(){
    		box.style.height='400px';
    	}
    	zero.onclick=function(){
    		box.style='none';
    		bg.style.display='none';
    	}
    	ok.onclick=function(){
    		bg.style.display='none';
    	}
}












