// JavaScript Document
$(function(){
	//表格隔行换色
		$(".datalist tr:odd").addClass("altrow");
	//列表虚线
		$(".dotted a:last").css("border","0");
	//点空白关闭弹窗
		//$(".swBg").live("click",function(){colseSw();});
	//互斥选择
		$(".choose_a a").on("click",function(){
				$(this).siblings("a").removeClass("act");
				$(this).addClass("act");
			});
	//图标效果
		$(".mg_middletpd").on("mouseenter",function(){
				$(this).children("img").animate({"margin-top":"0"},200)
				$(this).children("img").animate({"margin-top":"5px"},200)
			});


})

	//弹窗
		function showSw(title,content,w,btn){
			/*
				title=标题内容	/文本
				content=弹出内容	/html、文本
				w=弹窗宽度 /数字
				
				btn=1 -->  1个关闭按钮
				btn=2 -->  确定+取消按钮
				btn=html内容 -->  自定义html按钮
			*/
				$(".swCon").remove();
				$(".swBg").remove();
			if(!btn){
					btn=""
				}
			if(btn==1){
					btn="<input class=\"closesw\" type=\"button\" value=\"确 定\">"
				}
			if(btn==2){
					btn="<input class=\"confirm closesw\" type=\"button\" value=\"确 定\"><input class=\"closesw\" type=\"button\" value=\"取 消\">"
				}
			
			var win="<div class=\"swCon\" style=\" width: " + w+ "px;margin-left:-" + w/2 + "px;\"><h1><span>" + title+ "</span><a href=\"##\" title=\"关闭\" class=\"closesw\"><img src=\"images/close.png\"></a></h1><div class=\"swContxt\">" + content+ "</div><div class=\"btnbg\">" + btn + "</div></div><div class=\"swBg\"></div>"
			$("body").append(win);
			swheight();
			setTimeout(swheight,100);
			//适配移动端
			if($(".swCon").width()>$(window).width()){
					$(".swCon").css("width","90%")
					swheight();
					$(".swCon").css("margin-left",0-$(".swCon").width()/2)
				}
			$(".closesw").live("click",function(){
					colseSw();
				})
		}
			function swheight(){		
				$(".swCon").css("margin-top",0-$(".swCon").height()/2)
			 }
			//关闭弹窗
			function colseSw(){		
				$(".swCon").remove();
				$(".swBg").remove();
			 }
			 