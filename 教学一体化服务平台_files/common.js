function doSort(n){$(document).ready(function(){$("span[class^=Nsb_r_list_tha]").each(function(){$("#hidSortFields").val().replace(" desc ","")==$(this).attr("id")?($(this).removeClass(),$(this).addClass($.cookie("hidSortFieldsClass"))):($(this).removeClass(),$(this).addClass("Nsb_r_list_tha3")),$(this).bind("click",function(){$(this).attr("class")=="Nsb_r_list_tha1"||$(this).attr("class")=="Nsb_r_list_tha3"?($("#hidSortFields").val($(this).attr("id")),$(this).removeClass("Nsb_r_list_tha3"),$(this).removeClass("Nsb_r_list_tha1"),$(this).addClass("Nsb_r_list_tha2"),$.cookie("hidSortFieldsClass","Nsb_r_list_tha2")):($("#hidSortFields").val($(this).attr("id")+" desc "),$(this).removeClass("Nsb_r_list_tha2"),$(this).addClass("Nsb_r_list_tha1"),$.cookie("hidSortFieldsClass","Nsb_r_list_tha1")),eval(n)})})})}function jcomGetAllSelectedRecords(n){n||(n="chkSelect");var t="",r=document.getElementsByName(n);for(i=0;i<r.length;i++)r[i].checked==!0&&(t=t+r[i].value+",");return t!=""&&(t=t.substr(0,t.length-1)),t}function jcomSelectAllRecords(n,t){n||(n="chkSelectAll"),t||(t="chkSelect");var f=document.getElementById(n).checked,r="",u=document.getElementsByName(t);for(i=0;i<u.length;i++)u[i].checked=f,r=r+u[i].value+",";return r!=""&&(r=r.substr(0,r.length-1)),r}function jscomNewOpenMaxWindow(n,t){var u,o,i,r,e,f;e=screen.width,f=screen.height-60,i=0,i<0&&(i=0),r=0,r<0&&(r=0),u="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",u=u+"width="+e+",height="+f+",left="+i+",top="+r,o=window.open(n,t,u);try{o.focus()}catch(s){}}function jscomPrintPreviewOneFolder(n,t,i,r){_printPreviewReturnParameter=n+"&Spliter;"+t+"&Spliter;"+i+"&Stype;"+r,window.open("../framework/PrintPreview.aspx")}function jscomPrintPreviewCallback(){return _printPreviewReturnParameter}function jscomPrintLabelCallback(){return _printPreviewReturnLabel}function jscomPrintPreviewByLabel(n,t,i,r,u){_printPreviewReturnParameter=n+"&Spliter;"+i+"&Spliter;"+r+"&Stype;"+u,_printPreviewReturnLabel=t,window.open("../framework/PrintPreview.aspx")}function jscomPrintPreview(n,t,i,r){_printPreviewReturnParameter=n+"&Spliter;"+t+"&Spliter;"+i+"&Stype;"+r,window.open("../framework/PrintPreview.aspx")}function jscomDownloadFile(n,t){t==null&&(t="local"),window.open("../../module/DownloadFile.aspx?fileName="+n+"&fileLocation="+t)}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomNewOpenBySize(n,t,i,r){var e,o,u,f;i||(i=screen.width),r||(r=screen.height-60),u=(screen.width-i)/2,u<0&&(u=0),f=(screen.height-60-r)/2,f<0&&(f=0),e="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",e=e+"width="+i+",height="+r+",left="+u+",top="+f,o=window.open(n,t,e);try{o.focus()}catch(s){}}function jscommOnBlurCheckForOnlyPositiveInteger(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&(isNaN(n.value)?(window.alert(Translate("common3","","请输入非负整型数字！")),n.focus(),n.select()):n.value.indexOf(".",0)>-1?(window.alert(Translate("common3","","请输入非负整型数字！")),n.focus(),n.select()):parseInt(n.value)<0&&(window.alert(Translate("common3","","请输入非负整型数字！")),n.focus(),n.select()))}function jscomOnBlurCheckForOnlyPositiveNumber(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&(isNaN(n.value)?(window.alert(Translate("common13","","请输入非负数字！")),n.focus(),n.select()):parseFloat(n.value)<0&&(window.alert(Translate("common13","","请输入非负数字！")),n.focus(),n.select()))}function jscomNewOpenModalDialog(n,t,i){var r=new Date;return n=n.lastIndexOf("?")==-1?n+"?currTime="+r.getTime():n+"&currTime="+r.getTime(),showModalDialog(n,window,"dialogWidth:"+t+"px; dialogHeight:"+i+"px;help:0;status:0;resizeable:1;")}function jscomNewOpenBySize(n,t,i,r){var e,o,u,f;i||(i=screen.width),r||(r=screen.height-60),u=(screen.width-i)/2,u<0&&(u=0),f=(screen.height-60-r)/2,f<0&&(f=0),e="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",e=e+"width="+i+",height="+r+",left="+u+",top="+f,o=window.open(n,t,e);try{o.focus()}catch(s){}}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomNewOpenFullScreen(n,t){var i=window.open(n,t,"fullscreen=yes,toolbar=no");try{i.focus()}catch(r){}}function jscomSelectDept(n,t,i,r,u,f){f==null&&(f="../../"),t==null&&(t=""),n==null&&(n=""),r==null&&(r=""),u==null&&(u="Y"),i!=""?parent.WebTab_CreateTab("SelectDept",Translate("business5","","选择部门"),"framework/user/SelectDept.aspx?OpenerName="+i+"&DeptRight="+r+"&IsLimitByOwner="+u+"&ParentDeptUid="+n+"&SelectDeptUid="+t):jscomNewOpenBySize(f+"framework/user/SelectDept.aspx?OpenerName="+i+"&DeptRight="+r+"&IsLimitByOwner="+u+"&ParentDeptUid="+n+"&SelectDeptUid="+t,"SelectDept",600,480)}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomOnBlurCheckForOnlyNumber(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&isNaN(n.value)&&(window.alert(Translate("common1","","请输入数字类型！")),n.focus(),n.select())}function GetFormObject(n){n==null&&(n="form1");var t=document.forms[n];return t||(t=eval("document."+n)),t}function bgiframe(n){var i={},u=navigator.userAgent.toLowerCase(),t,r;(t=u.match(/msie ([\d.]+)/))?i.ie=t[1]:(t=u.match(/firefox\/([\d.]+)/))?i.firefox=t[1]:(t=u.match(/chrome\/([\d.]+)/))?i.chrome=t[1]:(t=u.match(/opera.([\d.]+)/))?i.opera=t[1]:(t=u.match(/version\/([\d.]+).*safari/))?i.safari=t[1]:0,i.ie=="6.0"&&(r=document.createElement("iframe"),r.id=n.id,r.src="javascript:false",r.style.cssText="display:block;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:-1; border:0;filter:Alpha(Opacity='0');",n.insertBefore(r,n.firstChild))}function GetNavigator(){var t={},i=navigator.userAgent.toLowerCase(),n;return(n=i.match(/msie ([\d.]+)/))?t.ie=n[1]:(n=i.match(/firefox\/([\d.]+)/))?t.firefox=n[1]:(n=i.match(/chrome\/([\d.]+)/))?t.chrome=n[1]:(n=i.match(/opera.([\d.]+)/))?t.opera=n[1]:(n=i.match(/version\/([\d.]+).*safari/))?t.safari=n[1]:0,t}try{$(function(){$(".commoninput").each(function(){$(this).removeClass("commoninput"),$(this).addClass("Nsb_form_s_tt")}),$(".commontextarea").each(function(){$(this).removeClass("commontextarea"),$(this).addClass("Nsb_form_s_ttarea")}),$("select[id^='extend']").each(function(){$(this).addClass("Nsb_form_s_slct")})})}catch(e){}var _printPreviewReturnParameter="",_printPreviewReturnLabel="";
// 浏览器版本判断
function getOs() {  
   var OsObject = ""; 
   if(navigator.userAgent.indexOf("MSIE")>0) {  
        return "msie";  
   }  
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
        return "firefox";  
   }  
   if(isSafari=navigator.userAgent.indexOf("Chrome")>0) {  
       return "chrome";  
   }
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {  
        return "safari";  
   }   
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
        return "camino";  
   }  
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){  
        return "gecko";  
   }  
    
}
function isIE6() {  
	   var OsObject = ""; 
	   if(navigator.userAgent.indexOf("MSIE 6")>0) {  
	        return true;  
	   }else{
		   	return false;
	   }
}
function keyUpFloat(obj) {
	obj.value = obj.value.replace(/[^\d\.]/g, '');
}
// 只文本框只能为数字
function keyUpNum(obj) {
	obj.value = obj.value.replace(/\D/g, '');
}
function Logout(url){
	window.location.href = getRandomUrl(url + "/xk/LoginToXk?method=exit");
}
// 是否显示切换
function changeDisplay(id){
 
	if(document.getElementById(id).style.display == "none"){
		document.getElementById(id).style.display = "";
	}else{
		document.getElementById(id).style.display = "none";
	}	
}
// checkbox 全选
function selectAll(obj,lstName){
	var objs = document.getElementsByName(lstName);
	for(i = 0; i < objs.length; i++){
		objs[i].checked = obj.checked;		
	}
}
// 刷新本页面
function refresh(obj){　
    
	if(obj == null　|| obj == undefined　){ 
		if(getOs() == "chrome"){
			window.location.reload();// 谷歌浏览器要用此方法刷新
		}else{
			window.location.href=window.location.href;
		} 
		
	}else{
		if(getOs() == "chrome"){
			obj.location.reload();// 谷歌浏览器要用此方法刷新
		}else{
			obj.location.href=obj.location.href;
		}
		
	}	
}
function changeTheme(url,theme){ 
	  
	$.post(url+"/system/changeTheme.do",{
		changeTheme:theme
			  },
			  function(data,status){  
				 // window.location.href=getRandomUrl(url+"/framework/main.jsp");
				  if(data.indexOf("ok") >= 0){
					  document.getElementById("theme_blue").setAttribute("class", "Nsb_top_c3_1");
					  document.getElementById("theme_green").setAttribute("class", "Nsb_top_c3_2");
					  document.getElementById("theme_orange").setAttribute("class", "Nsb_top_c3_3");
					  document.getElementById("theme_red").setAttribute("class", "Nsb_top_c3_4");
					  document.getElementById("theme_purple").setAttribute("class", "Nsb_top_c3_5");
					  document.getElementById("theme_gray").setAttribute("class", "Nsb_top_c3_6");
					  document.getElementById("link_theme").href = url+"/framework/images/"+theme+".css"; 
					  if(theme == "blue"){
						  document.getElementById("theme_blue").setAttribute("class", "Nsb_top_c3_11");
					  }
					  if(theme == "green"){
						  document.getElementById("theme_green").setAttribute("class", "Nsb_top_c3_22");
					  }
					  if(theme == "orange"){
						  document.getElementById("theme_orange").setAttribute("class", "Nsb_top_c3_33");
					  }
					  if(theme == "red"){
						  document.getElementById("theme_red").setAttribute("class", "Nsb_top_c3_44");
					  }
					  if(theme == "purple"){
						  document.getElementById("theme_purple").setAttribute("class", "Nsb_top_c3_55");
					  }
					  if(theme == "gray"){
						  document.getElementById("theme_gray").setAttribute("class", "Nsb_top_c3_66");
					  }
					  changeDisplay('divTopTheme');
				  }
				 
			  });
	 
	
}
// 地址随机，解决缓存问题
function getRandomUrl(htmlurl){
	var count =htmlurl.indexOf("?");
	var  date=new Date();
	var t=Date.parse(date);    
	if(count<0){
		htmlurl=htmlurl+"?tktime="+t;
	}else{
		htmlurl=htmlurl+"&tktime="+t;
	}
	return htmlurl;
}
// 模式 窗口打开s
function JsMod(htmlurl,tmpWidth,tmpHeight){
	htmlurl=getRandomUrl(htmlurl);
	var newwin = window.showModalDialog(htmlurl,window,"dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");
 
	if(newwin == "refresh" || newwin == "ok"){		
		if(getOs() == "chrome"){
			window.location.reload();// 谷歌浏览器要用此方法刷新
		}else{
			window.location.href = window.location.href;
		}
	}
}
// 模式 窗口打开s只要打开都刷新父窗口
function JsModAll(htmlurl,tmpWidth,tmpHeight,formName){
	htmlurl=getRandomUrl(htmlurl);
	var newwin = window.showModalDialog(htmlurl,window,"dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");
	if(formName == null　|| formName == undefined　|| formName == ""){
		document.getElementById("Form1").submit();
	}else{
		document.getElementById(formName).submit();
	}
}
//模式 窗口打开s
function JsModForm(htmlurl,tmpWidth,tmpHeight,formName){
	htmlurl=getRandomUrl(htmlurl);
	var newwin = window.showModalDialog(htmlurl,window,"dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");

	if(newwin == "refresh" || newwin == "ok"){		
		if(formName == null　|| formName == undefined　|| formName == ""){
			document.getElementById("Form1").submit();
		}else{
			document.getElementById(formName).submit();
		}
	}
}
window.showModalDialog = function(url,obj,sFeatures){ 
	sFeatures = sFeatures.replace(/dialogHeight/gi,"height");
	sFeatures = sFeatures.replace(/dialogWidth/gi,"width"); 
	sFeatures = sFeatures.replace(/dialogTop/gi,"top"); 
	sFeatures = sFeatures.replace(/dialogLeft/gi,"left");
	sFeatures = sFeatures.replace(/:/gi, "=");
	sFeatures = sFeatures.replace(/;/gi, ",");
	
	var iTop = 60;    //获得窗口的垂直位置;
	var iLeft = 200;  	//获得窗口的水平位置; 
	sFeatures = sFeatures+",top="+iTop+",left="+iLeft;
 
	var newWindow = window.open(url,"",sFeatures);
	return newWindow;
}
// 分页
function pagination(pageIndex){
	if(pageIndex != null && pageIndex != ""){
		document.getElementById("pageIndex").value = pageIndex;
	}
	console.log(pageIndex);
	//edit by huangjw 2019.3.18 教师学生的公共列表页面bug:list页面点击下一页后再进行重新查询时，会在新窗口进行查询
	//var oldTarget = window.name;
	//window.name = 'win_target';
	//edit by zhaoy 直接用原来的window.name打开就行,win_target 打开会导致回车跳转的时候打开新页面
	document.getElementById("Form1").target =window.name;
	document.getElementById("Form1").submit();
	//window.name = oldTarget;
}  
function paginationKeyDown(){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==13){ // enter 键
          pagination(null);
    }
}
function checkInteger(input){
	str = input.value;
  	var allValid = true;
  	if(str==""){return false;}
 	try{
		if(parseInt(str)!=str) allValid = false;
  	} catch(ex){
		allValid = false;
	}
	if(!allValid){
		alert("输入的数据必须是数字");
		input.value="";
		input.focus();
		return false;
  	}
  	return true;
}
var obj_pa = new Array();
var patt_pa = new Array();
var patt_value = new Array();
var pamess_pa = new Array();
var i_pa = 0;
function checkPattern(object,patternType,pattern_value,mess) {	
	obj_pa[i_pa] = object;
	patt_pa[i_pa] = patternType;
	patt_value[i_pa] = pattern_value;
	pamess_pa[i_pa] = mess;
	i_pa ++;
}

//打开一个窗口
function JsOpenWin(htmlurl,tmpWidth,tmpHeight){
   var  top = ((window.screen.availHeight-tmpHeight)/2);  
   var  left = ((window.screen.availWidth-tmpWidth)/2);  
	//console.info(window.screen.availHeight);
	//console.info(document.body.clientHeight);
	window.open(htmlurl, "printsetup", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,top=" 
		+ top
		+ " ,left=" 
		+ left
		+ ",width="+tmpWidth+"px,height=" + tmpHeight + "px");
}

function trim(input){
	return input.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

function openWindow(htmlurl,tmpWidth,tmpHeight,itop,ileft){
	if(!tmpWidth){
		tmpWidth = 500;
	}
	if(!tmpHeight){
		tmpHeight = 500;
	}
	var top = ((window.screen.availHeight-30-tmpHeight)/2);
	if(itop!=null && itop!=""){
		top = itop;
	}
	var left = ((window.screen.availWidth-10-tmpWidth)/2);  
	if(ileft!=null && ileft!=""){
		left = ileft;
	}
	
	window.open(htmlurl, "_blank", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,top=" 
			+ top+ ",left=" + left+ ",width="+tmpWidth+"px,height=" + tmpHeight + "px");
}

//判断身份证格式
function checkIdCard(obj) {
	if (obj.value == "") return false;
	var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
	var error;
	var varArray = new Array();
	var intValue;
	var lngProduct = 0;
	var intCheckDigit;
	var idNumber = obj.value;
	var intStrLen = obj.value.length;
	if ((intStrLen != 15) && (intStrLen != 18)) {
		error = "输入身份证号码长度不正确！"; 
		alert(error); 
		obj.focus();
		obj.select();
		return false;
	}
	for (var i = 0; i < intStrLen; i++) {
		varArray[i] = idNumber.charAt(i);
		if ((varArray[i] < "0" || varArray[i] > "9") && (i != 17)) {
			error = "错误的身份证号码！"; 
			alert(error); 
			obj.focus();
			obj.select();
			return false;
		} else {
			if (i < 17) {
				varArray[i] = varArray[i] * factorArr[i];
			}
		}
	}
	if (intStrLen == 18) {
		var date8 = idNumber.substring(6, 14);
		if (checkDateId(date8) == false) {
			error = "身份证中日期信息不正确！"; 
			alert(error); 
			obj.focus();
			obj.select();
			return false;
		}
		for (var i = 0; i < 17; i++) {
			lngProduct = lngProduct + varArray[i];
		}
		intCheckDigit = 12 - lngProduct % 11;
		switch (intCheckDigit) {
		  case 10:
			intCheckDigit = "X";
			break;
		  case 11:
			intCheckDigit = 0;
			break;
		  case 12:
			intCheckDigit = 1;
			break;
		}
		if (varArray[17].toUpperCase() != intCheckDigit) {
			error = "身份证效验位错误!...正确为： " + intCheckDigit + "";
			alert(error); 
			obj.focus();
			obj.select();
			return false;
		}
	} else {
		var date6 = idNumber.substring(6, 12);
		if (checkDateId(date6) == false) {
			alert("身份证日期信息有误！"); 
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

function checkDateId(date){    
	return true;
}


//////////////////////////////////////
var obj_nan = new Array();
var type_nan = new Array();
var msg_nan = new Array();
var i_is = 0;
var check_type_temp = "";
var check_mess_temp = "";

function checkTextType(object,type,mess) {
	try  
	  { if(isValidate){return true;}
	}catch(err)  
	{}
	   obj_nan[i_is] = object;
	   type_nan[i_is] = type;
	   msg_nan[i_is] = mess;
	   i_is ++;
	   check_type_temp = type;
	   check_mess_temp = mess;
	  return checkBlurType(object);
}

function checkBlurType(object) {
	var strValue = object.value;
	var result=true;
	switch( check_type_temp.toLowerCase()) {
			//必须为整数
			case "int" :
				result = isInt( strValue );
				if(!result) {
					alert(check_mess_temp+"必须为整数!");
					object.focus();
					return false;
				}
				break;
			//必须为数字，包括小数
			case "num" :
				result = isNumeric( strValue );
				if(!result) {
					alert(check_mess_temp+"必须为数字!");
					object.focus();
					return false;
				}
				break;
			//书写字符串：数字、字符或下划线
			case "str" :
				result = checkStr2( strValue );
				if(!result) {
					alert(check_mess_temp+"必须为数字、字符、下划线或短横线!");
					object.focus();
					return false;
				}
				break;
			//日期格式
			case "date" :
				result = isDate( strValue );
				if(!result) {
					alert(check_mess_temp+"格式书写错误!");
					object.focus();
					return false;
				}
				break;
			//邮件格式
			case "email" :
				result = isEmail( strValue );
				if(!result) {
					alert(check_mess_temp+"格式书写错误!");
					object.focus();
					return false;
				}
				break;
			//钱格式
			case "money" :
				result = isMoney( strValue );
				if(!result) {
					alert(check_mess_temp+"书写错误!");
					object.focus();
					return false;
				}
				break;
			//邮政编码
			case "code" :
				result = isPostalCode( strValue );
				if(!result) {
					alert(check_mess_temp+"书写错误!");
					object.focus();
					return false;
				}
				break;
			//电话格式
			case "isphone" :
				result = isPhone( strValue );
				if(!result) {
					alert(check_mess_temp+"书写错误!");
					object.focus();
					return false;
				}
				break;
		}
		
		if(check_type_temp.indexOf("num$") >= 0) {
			var max = check_type_temp.split("$")[1];
			result = isNumeric( strValue );
			if(!result) {
				alert(check_mess_temp+"必须为数字!");
				object.focus();
				object.value='';
				return false;
			}
			if(Number(strValue) >= Number(max)) {
				alert(check_mess_temp+"必需小于"+max);
				object.focus();
				object.value='';
				return false;
			}
		}
		if(check_type_temp.indexOf("int$") >= 0) {
			var max = check_type_temp.split("$")[1];
			result = isInt( strValue );
			if(!result) {
				alert(check_mess_temp+"必须为整数!");
				object.focus();
				object.value='';
				return false;
			}
			if(Number(strValue) >= Number(max)) {
				alert(check_mess_temp+"必需小于"+max);
				object.focus();
				object.value='';
				return false;
			}
		}
		
		return result;
}

//验证是否 数字
function isNumeric( strValue )
{
	// 数字必须是 0123456789 或者为空

	return !isNaN(strValue);
}

//验证是否 整数
function isInt( strValue )
{
	// 数字必须是 0123456789 或者为空

	return checkExp( /^\d*$/g, strValue );
}

//使用正则表达式，检测 s 是否满足模式 re
function checkExp( re, s )
{
	return re.test( s );
}
//刷新open打开的父页面
function parentRefresh(){
	try{
		window.opener.openProgress();
	}catch(e){}
	
	try{
		window.opener.indexSx();   
	}catch(e){
		//opener.location.href = opener.location.href; 
		window.opener.location.reload();
	} 
	window.opener=null;
	window.close();
}
function indexSx(){ 
	try{
		
		document.getElementById("Form1").target="";
		document.getElementById("Form1").action="";
		document.getElementById("Form1").submit(); 
	}catch(e){}
}