/*loding效果
 * @param
 *return undefined
 * */
function lod(){
	//加载数%
	var num =0;
	$('#lodingBox').css({
		width: $(window).width(),
		height: $(window).height()
	})
	$('#loding').css({
		left:($(window).width()- $('#loding').width())/2,
		top:($(window).height()- $('#loding').height())/2
	})
	$('#lodingNum').css({
	left:($(window).width()- $('#lodingNum').width())/2,
	top:($(window).height()- $('#lodingNum').height()-80)/2
	})
	var time = setInterval(function(){
		num++;
		$('#lodingNum').html(num+'%');
			if(num == 10){
				clearInterval(time);
				$('#lodingNum').html('');
				$('#lodingBox').css('display','none');
				$('#box').css('display','block')
		}
	},20)
}

/*
 
 * 
 * */





















