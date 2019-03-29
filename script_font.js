text_info = Function(){
	var divs = 
	document.getElementsByClassName("text_info");
		for(var i = 0; <divs.length; i++){
			var relFontsize = divs[i].offsetWidth*0.05;
				divs[i].style.fontSize= relFontsize+ 'px';
		}
};

window.onload = function(event){
	text_info();
};

window.onressize = function(event){
	text_info();
}