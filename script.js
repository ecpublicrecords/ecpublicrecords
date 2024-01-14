document.getElementById("robloxUsername").addEventListener("input", function() {
    // Perform validation or other checks as needed
});

function searchProfile() {
    // Fetch and display profile information, then show page2
    // Also, log the username somewhere

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function switchTab(tabName) {
    // Handle switching between tabs
}

function searchOffender() {
    // Implement logic to search for an offender
}

function logout() {
    // Handle logout and clearing username
    document.getElementById("robloxUsername").value = "";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
}
