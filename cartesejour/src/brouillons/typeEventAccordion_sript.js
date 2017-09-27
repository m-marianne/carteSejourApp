var eventFamily = document.getElemntByClassName("form_ListNiveau1_item");

for(var i=0, i<eventFamily, i++){
	alert("test");
	eventFamily[i].onclick = function(){
		this.classList.toggle("active");

		var eventItem = this.nextElementSibling;
		if(eventItems.style.display === "block"){
			eventItems.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	}
}