$(document).ready(function () {
    // Example code that does something when you enter text in the
    // search bar and press the search button
    $("#searchButton").click(function () {
        let searchPrompt = $("#searchBar").val()
        alert("You have searched for: " + searchPrompt);
    });
});