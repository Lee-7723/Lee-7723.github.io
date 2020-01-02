$(function(){
	//日历选择
	$(".laydate-icon").click(laydate);
	//侧边栏
	$(".event_right > p a:last").addClass("last");
	
	//侧边栏
	var n_show=false;		//是否显示所有事件
	$(".s_more").hover(function(){
			$(this).siblings().fadeIn(600);
			n_show=true;
	})
	$(".event_right > p a").hover(function(){
			var data=$(this).attr("data").split("##");
			var detailtxt="<span> <b>时间</b>"+data[0]+"<br><b>标题</b>"+data[1]+"<br><b>说明</b>"+data[2]+"</span>";
			$(this).after(detailtxt);
			//$(".event_right > p span").fadeIn(600).css("top",$(this).children("i").offset().top-$(".event_right > p span").height()/2);
			if($(this).attr("class")!="n" && n_show==false){
				var a_num=$(".event_right > p a.near").index($(this))+1;
			}else{
				var a_num=$(".event_right > p a").index($(this))+1;
			}
			
			$(".event_right > p span").fadeIn(600).css("top",132+a_num*47);
		},function(){
			$(".event_right > p span").remove();
		})
	$(".event_right > p").hover(function(){},function(){
		$(".event_right > p >a.n").fadeOut(600);
		n_show=false;
	})	
})
