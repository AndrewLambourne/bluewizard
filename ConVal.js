
function validateItems() {
    var name = document.forms["valid"]["name"].value;
    var email = document.forms["valid"]["email"].value;
	var email = document.forms["valid"]["phone"].value;

	if (name != "" && email != "" || name != "" && phone != "") {
        alert("Your Information has been entered!");
	}
}