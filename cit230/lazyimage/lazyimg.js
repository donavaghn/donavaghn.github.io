var image = document.getElementById("lazy")
var bigimage = document.createElement("img")

bigimage.onload = function() {
	image.src = this.src
}

setTimeout(function() {bigimage.src = "images/amsterdam-architecture-boat-large.jpg"}, 5)