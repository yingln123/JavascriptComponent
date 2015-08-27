/**
 * 
 */

window.onload=function(){
	
	select("selectBox");
	menu("menu-list");
}

function $Id(id){
	var oElement = document.getElementById("");	
}

function add(){
	
	document.getElementById("menu-list").innerHTML+="<LI>"+new Date().getTime()+"</LI>";
}

/**
 * 给指定的元素赋予select功能
 */
function select(id){
	var timer = null;
	var oElement = document.getElementById(id);
	oElement.onclick=function(event){
		var event = event||window.event;
		if(event.target.tagName.toUpperCase()=="LI"){
			var val = event.target.innerHTML;
			oElement.querySelector(".value-box").innerHTML=val;
			oElement.querySelector("#select-list").style.display="none";
		}else if(event.target.className=="value-box"){
			oElement.getElementsByTagName("ul")[0].style.display="block";
		}
		event.stopPropagation();
	}
	
	oElement.onmouseout=function(event){
		var event = event||window.event;
		timer = setTimeout(function(){
			oElement.querySelector("#select-list").style.display="none";
		}, 500);
	}
	
	oElement.onmouseover=oElement.getElementsByTagName("ul")[0].onmouseover=function(){
		if(timer!=null){
			clearTimeout(timer);
			timer = null;
		}
	}
	
	window.onclick=function(event){
		var event = event||window.event;
		if(event.target.id==id){
			event.stopPropagation();
		}else{
			document.getElementById("select-list").style.display="none";
		}
	}
}

/**
 * 给指定的元素赋予列表功能
 * @param id
 */
function menu(id){
	var eMenuList = document.getElementById(id).querySelectorAll(".menu-item");;
	(function(){
		var i=0;
		for(i=0;i<eMenuList.length;i++){
			var menuItem = eMenuList[i];
			var title = menuItem.querySelector(".menu-item-title");
			title.onclick=function(){
				var menulist = menuItem.querySelector(".menu-item-list");
				//alert(getStyle(menulist, "display"));
				if(getStyle(menulist, "display")=="none"){
					menulist.style.display="block";
				}else{
					menulist.style.display="none";
				}
			}
		}
	})();
	
}
/**
 * 获取元素样式
 * @param obj
 * @param attr
 * @returns
 */
function getStyle(obj, attr)  
{  
    if(obj.currentStyle)  
    {  
        return obj.currentStyle[attr];  
    }  
    else  
   {  
        return getComputedStyle(obj,false)[attr];  
   }  
}  


