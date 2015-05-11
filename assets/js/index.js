window.onload = function(){

	var infoBtn = $("#info_buttom");
	var pageWarp = $("#info-warp");
	var homeBtn = $("#home_btn");


	var listInfo = $("#list_info");
	var listCon = $("#list_contact");
	var listAbout = $("#list_about");

	listInfo.onclick = function(){
		var infoMe = $(".info_me")[0];
		addClass(infoMe,"info_show");
	};
	listCon.onclick = function(){
		var contactMe = $(".contact_me")[0];
		addClass(contactMe,"contact_show");
	};


	addEvent(infoBtn,"click",scrollDown);
	addEvent(homeBtn,"click",scrollUp);

	function scrollDown(){
		var pageWarp = $("#info-warp");
		var infoMe = $(".info_me")[0];

		if(pageWarp){
			pageWarp.style.top = 0 +"px";
			pageWarp.style.width = 100 + "%";
			pageWarp.style.height = 100 + "%";
			addClass(infoMe,"info_show");
		}
	}

	function scrollUp(){
		var pageWarp = $("#info-warp");
		if(pageWarp){
			pageWarp.style.top = -200 +"%" ;
		}
	}
};