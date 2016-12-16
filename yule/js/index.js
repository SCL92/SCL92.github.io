window.onload = function(){
	var n=0;
	//loding加载
	lod();
	//加载完成
	console.log($(window).innerHeight()-$('.head').innerHeight()-66)
//		$('.navmine').css({
//			height:$(window).innerHeight()-$('.head').innerHeight()-55
//		})
		$('.mine').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.one').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.two').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.three').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.four').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.five').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.six').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.foot').css({
			height:$(window).innerHeight()-$('.head').innerHeight()-65
		})
		$('.caseContent').css({
			height:$(window).innerHeight()-$('.caseHead').innerHeight()-200
		})
		$('.advantageContent').css({
			height:$(window).innerHeight()-$('.advantageHead').innerHeight()-150
		})
		$('.processContent').css({
			height:$(window).innerHeight()-$('.advantageHead').innerHeight()-190
		})
		$('.initContent').css({
			height:$(window).innerHeight()-$('.initHead').innerHeight()-220
		})
		
		$('.nav').on('click',function(){
			$('.navline1').toggleClass('navline1Hover')
			$('.navline2').toggleClass('none');
			$('.navline3').toggleClass('navline3Hover')
			$('.navmine').toggleClass('navminePos')
			$('.content').toggleClass('contenttop')
			$('.navmine li').toggleClass('navmineHover')
			
		})
		console.log($(window).innerHeight()-$('.head').innerHeight())
		//第一屏交互

		var bannerTimer =null;
		var num =0;
		//创建点击按钮
		for(var i=0;i<$('.bannerbox li').length;i++){
			var emph=$('<li></li>') 
			$('.bannerBtn').append(emph);
		}

		//初始化bannerBtn
		$('.bannerBtn li').eq(0).attr('class','liHover');
		$('.bannerBtn li').hover(function(){
			clearInterval(bannerTimer);
			$('.bannerbox li').css('opacity','1');
			$('.bannerBtn li').attr('class','')
			$(this).attr('class','liHover');
			$('.bannerbox li').eq($(this).index()).css('opacity','0');
			num = $(this).index();
		},function(){
			bannerTimer =setInterval(bannerMove,3000);
		});
			
		bannerTimer= setInterval(bannerMove,3000);
		function bannerMove(){
			num++;
			num%=$('.bannerbox li').length;
			$('.bannerbox li').css('opacity','1');
			$('.bannerBtn li').attr('class','')
			$('.bannerbox li').eq(num).css('opacity','0');
			$('.bannerBtn li').eq(num).attr('class','liHover')
		
		}
		
	/*
	 *
	 * 第二屏的交互效果
	 * 
	 * */
	$('.messageList li').hover(function(){
		$('.messageList li').attr('class','liStyleB')
		$('.messageList .messageText').css('display','none');
		if($(this).index()==0){
			$('.messagePic1').css({
				backgroundPositionX:0,
				backgroundPositionY:-20 
			})
		}else{
			$('.messagePic1').css({
				backgroundPositionX:-190,
				backgroundPositionY:-0 
			})
		}
		if($(this).index()==1){
			$('.messagePic2').css({
				backgroundPositionX:0,
				backgroundPositionY:-20 
			})
		}else{
			$('.messagePic2').css({
				backgroundPositionX:-150,
				backgroundPositionY:-0 
			})
		}
		if($(this).index()==2){
			$('.messagePic3').css({
				backgroundPositionX:0,
				backgroundPositionY:-20 
			})
		}else{
			$('.messagePic3').css({
				backgroundPositionX:-180,
				backgroundPositionY:-0 
			})
		}
		if($(this).index()==3){
			$('.messagePic4').css({
				backgroundPositionX:0,
				backgroundPositionY:-20 
			})
		}else{
			$('.messagePic4').css({
				backgroundPositionX:-200,
				backgroundPositionY:-0 
			})
		}
		$(this).attr('class','liStyleA')
		$('.messageList .messageText').eq($(this).index()).css('display','flex');
		
	},function(){
		$('.messageList li .messagePic1').css({
			backgroundPositionX:-190,
			backgroundPositionY:0
		})
		$('.messageList li .messagePic2').css({
			backgroundPositionX:-145,
			backgroundPositionY:0
		})
		$('.messageList li .messagePic3').css({
			backgroundPositionX:-180,
			backgroundPositionY:0
		})
		$('.messageList li .messagePic4').css({
			backgroundPositionX:-200,
			backgroundPositionY:0
		})
		$('.messageList li').attr('class','messageBox')
		$('.messageList .messageText').css('display','none')
	})
	
	/*
	 *第三屏交互效果
	 * 
	 * */
	//header按钮交互效果
	$('.casePreBtn').hover(function(){
		$('.casePreBtn div').attr('class','show');
		$('.casePreBtn a').css('left','20%').html('案例')
	},function(){
		$('.casePreBtn div').attr('class','hides');
		$('.casePreBtn a').css('left','30%').html('※')
	})
	$('.caseNexBtn').hover(function(){
		$('.caseNexBtn div').attr('class','show');
		$('.caseNexBtn a').css('left','20%').html('更多')
	},function(){
		$('.caseNexBtn div').attr('class','hides');
		$('.caseNexBtn a').css('left','30%').html('...')
		
	})
	
	/*
	 *第五屏
	 * */
	
	var processTimer =null;
	var processNum=0;
	
	
//	processHove();
//	function processHove(){
		processTimer = setInterval(processMove,1000)
		function processMove(){
			processNum++;
			processNum%=$('.processDes li').length;
			$('.processDes li').attr('class','');
			$('.processDesBox').css('display','none');
			$('.processDes li').eq(processNum).attr('class','processDesHover');
			$('.processDesBox').eq(processNum).css('display','block');
			$('.processNum').html(processNum+1);
			
		}
	
	$('.processDes li').hover(function(){
		clearInterval(processTimer);
		$('.processDes li').attr('class','');
		$('.processDesBox').css('display','none');
		$('.processDes li').eq($(this).index()).attr('class','processDesHover');
		$('.processDesBox').eq($(this).index()).css('display','block');
		$('.processNum').html($(this).index()+1);
		
	},function(){
		$('.processDes li').attr('class','');
		$('.processDesBox').eq($(this).index()).css('display','block');
		processTimer = setInterval(processMove,1000);
		processNum=$(this).index();
		console.log($(this).index())
	})

	/*滚轮事件*/
		var content = document.getElementsByClassName('content')[0];
		console.log(content.offsetTop + document.documentElement.clientHeight)
		console.log($(window).innerHeight()-$('.head').innerHeight()-65)
		content.onmousewheel= fn;
        function fn(e) {
        	var onOff = true;
            var flag = true;
            if (e.wheelDelta) {
                flag = e.wheelDelta > 0 ? true : false;
            } else {
                flag = e.detail < 0 ? true : false;
            }

            var T;

            if (flag) {
            	if(onOff){
            		onOff = false;
            		n --;
	              	n = Math.max(n,0);
					T= content.offsetTop+document.documentElement.clientHeight-105;
//					mTween(content, "top", T, 100, "linear", function(){
//						onOff = true;
//					})
            	}
                
            } else {
            	if(onOff){
            		onOff = false;
            		n ++;
	              	n = Math.min(n,2);
	                T = content.offsetTop -document.documentElement.clientHeight+105;
            	}
            }
           
//			console.log(n);
            if (T > 0) {
                T = 0;
            } else if (T <= -content.offsetHeight) {
                T = -content.offsetHeight+document.documentElement.clientHeight-110
            }
//          content.style.top = T+'px';
			mTween(content, "top", T, 100, "linear", function(){
				onOff = true;
			})
            e.preventDefault();

            return false;
        }





}
