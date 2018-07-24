function diamondback() {
	$("#content-1").toggleClass("hide");
	$("#content-2").addClass("hide");
	$("#content-3").addClass("hide");
}

function coop() {
	$("#content-2").toggleClass("hide");
	$("#content-1").addClass("hide");
	$("#content-3").addClass("hide");
}

function cannondale() {
	$("#content-3").toggleClass("hide");
	$("#content-2").addClass("hide");
	$("#content-1").addClass("hide");
}