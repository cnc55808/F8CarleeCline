dpdnPets.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    alert("Your favorite pet is a " + dpdnPets.selection);
};

//Changed the header, button, and "value" of the jumbotron. Created a messagebox containing the fun dog fact.
jumboDogs.onclick = function() {
    alert("The shape of a dog’s face suggests its longevity: A long face means a longer life.");
};