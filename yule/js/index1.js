window.onload = function(){
	var n=0;
	//loding加载
	lod();
	//加载完成
	console.log($(window).innerHeight()-$('.head').innerHeight()-66)
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
	/*footer*/
	$(".needlist").click(function(){
		$(".massagefirm").toggleClass("show");
		$(this).addClass("firmstyle");
	})
	$(".needlist2").click(function(){
		$(this).addClass("firmstyle");
	})
	$(".needlist3").click(function(){
		$(this).addClass("firmstyle");
	})
	$(".name").blur(function(){
		$(".needlist2").removeClass("firmstyle")
	})
	$(".phonenum").blur(function(){
		$(".needlist3").removeClass("firmstyle")
	})
	/*事件委托*/
	$(".massagefirm").delegate('li','click',function(){
		$(".massagefirm").toggleClass("show");
		$(".needlist").html($(this).html())
		$(".needlist").removeClass("firmstyle")
	})

	$(".massagefirm li").hover(function(){
		$(".massagefirm li").css("background-color","gainsboro")
		$(this).css("background-color","orange")
	})
	$(".needsex").click(function(){
		if($(this).html() == "先生"){
			$(this).html("女士");			
		}else{
			$(this).html("先生");
		}
	})
	
	$(".infosub").hover(function(){
		$(".infostyle").addClass("addinfostyle")
		$(".infotext").css("display","block")
	
	},function(){
		$(".infostyle").removeClass("addinfostyle")
		$(".infotext").css("display","none")
	})
	/*滚轮事件*/
		var $content = $(".content");
		var $mine = $('.mine');
		var onOff = true;
		$(document).on('mousewheel DOMMouseScroll',function(e){
			var flag = true;
            if (e.originalEvent.wheelDelta) {
                flag = e.originalEvent.wheelDelta > 0 ? true : false;
            } else {
                flag = e.originalEvent.detail < 0 ? true : false;
            }
            var T;
            if (flag) {
            	if(onOff){//上滚
            		onOff = false;
            		n --;
	              	n = Math.max(n,0);
	              	console.log(n)
	              	if(n==1){
	              		$('.messageBox').css("top",'0')
	              	}else{
	              		$('.messageBox').css("top","538px")
	              	}
	              	if(n==2){
	              		$('.caseContent li').css("marginTop",'3%')
	              		$(".casePreBtn").css('left','0px')
	              		$(".caseNexBtn").css('right','0px')
	              		$(".caseHead h1").css('marginTop','0')
	              	}else{
	              		$('.caseContent li').css("marginTop",'60%')
	              		$(".casePreBtn").css('left','400px')
	              		$(".caseNexBtn").css('right','400px')
	              		$(".caseHead h1").css('marginTop','-100px')
	              		
	              	}
	              	if(n==3){
	              		$('.advantageContent').css("left","0px")
	              		$(".advantage .advantageHead").css("margin-left","5%")
	              	}else{
	              		$('.advantageContent').css("left","999px")
	              		$(".advantage .advantageHead").css("margin-left","-50%")
	              	}
	              	if(n==5){
	              		$(".initHead .casePreBtn").css("left","0px")
	              		$('.initHead .caseNexBtn').css("right","0px")
	              		$(".initlList li").css("padding-right","50px")
	              		$(".initrList li").css("padding-left","50px")
	              	}else{
	              		$("initHead .casePreBtn").css("left","400px")
	              		$('initHead .caseNexBtn').css("right","400px")
	              		$(".initlList li").css("padding-right","500px")
	              		$(".initrList li").css("padding-left","500px")
	              	}
	              	if(n==6){
	              		$(".massageList").css("margin-top","40px")
	              	}else{
	              		$(".massageList").css("margin-top","500px")
	              	}
					T = $content.position().top + $mine.innerHeight();
	              	if(T>=0){
	              		T=0;
	              	}
					$content.animate({
						top: T
					},500,function(){
						onOff = true;
					})
            	}
                
            } else {//下滚
            	if(onOff){
            		onOff = false;
            		n ++;
	              	n = Math.min(n,6);
	              	console.log(n)
	              	if(n==1){
	              		setTimeout(function(){
	              		},2000)
	              		var messageNum=0;
	              		var messagetimer=setInterval(fn,100)
	              		function fn(){
	              			$('.messageBox').eq(messageNum).animate({
	              				top:0
	              			})
	              			messageNum++;
	              			if(messageNum >= $('.messageBox').length){
	              				clearInterval(messagetimer)
	              			}
	              		}
	              	}
	              	if(n==2){
	              		$('.caseContent li').css("marginTop",'3%')
	              		$(".casePreBtn").css('left','0px')
	              		$(".caseNexBtn").css('right','0px')
	              		$(".caseHead h1").css('marginTop','0')
	              	}else{
	              		$('.caseContent li').css("marginTop",'60%')
	              		$(".casePreBtn").css('left','400px')
	              		$(".caseNexBtn").css('right','400px')
	              		$(".caseHead h1").css('marginTop','-100px')
	              	}
	              	if(n==3){
	              		$('.advantageContent').css("left","0px")
	              		$(".advantage .advantageHead").css("margin-left","5%")
	              	}else{
	              		$('.advantageContent').css("left","999px")
	              		$(".advantage .advantageHead").css("margin-left","-50%")
	              	}
	              	if(n==5){
	              		$(".initHead .casePreBtn").css("left","0px")
	              		$('.initHead .caseNexBtn').css("right","0px")
	              		$(".initlList li").css("padding-right","50px")
	              		$(".initrList li").css("padding-left","50px")
	              	}else{
	              		$(".initHead .casePreBtn").css("left","400px")
	              		$('.initHead .caseNexBtn').css("right","400px")
	              		$(".initlList li").css("padding-right","500px")
	              		$(".initrList li").css("padding-left","500px")
	              	}
	              	if(n==6){
	              		$(".massageList").css("margin-top","40px")
	              	}else{
	              		$(".massageList").css("margin-top","500px")
	              	}
	                T = $content.position().top - $mine.innerHeight();
	                if(T <= -$content.innerHeight() + $mine.innerHeight()) {
	              		T = -$content.innerHeight() + $mine.innerHeight();
	              	}
					$content.animate({
						top: T
					},500,function(){
						onOff = true;
					})
            	}
            }
            
            e.preventDefault();

            return false;
		})
}
