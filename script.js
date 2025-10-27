function drop_down(){
	var nav = document.getElementById("navigation")
	if (nav.className === "navbar"){
		nav.className = "navbar responsive";
	}
	else{
		nav.className = "navbar";
	}
}