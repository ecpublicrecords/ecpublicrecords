document.getElementById("robloxUsername").addEventListener("input", function () {
    // Perform validation or other checks as needed
});

function searchProfile() {
    // Fetch and display profile information, then show page2
    // Also, log the username somewhere

    const username = document.getElementById("robloxUsername").value;

    // Perform validation or other checks as needed

    // Example: Fetch profile information (replace with actual logic)
    const profilePicUrl = "https://example.com/default-avatar.jpg"; // Default avatar URL
    const profile = {
        username,
        profilePic: profilePicUrl,
    };

    // Log the username (you can log it wherever needed)
    console.log("Searched username:", username);

    // Update profile information on the page
    document.getElementById("profilePic").src = profile.profilePic;
    document.getElementById("profileUsername").textContent = profile.username;

    // Show page2
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function switchTab(tabName) {
    // Handle switching between tabs
    // Dynamically update content based on the selected tab
    const tabContent = document.getElementById("tabContent");
    tabContent.innerHTML = ""; // Clear existing content

    // Example: Display different content for each tab
    switch (tabName) {
        case "blackmarks":
            // Fetch and display content for Blackmarks tab
            // Update offender list based on logic
            break;
        case "classExpendable":
            // Fetch and display content for Class Expendable tab
            // Update offender list based on logic
            break;
        case "foundationBlacklist":
            // Fetch and display content for Foundation Blacklist tab
            // Update offender list based on logic
            break;
        default:
            // Handle default case or additional tabs
            break;
    }
}

function searchOffender() {
    // Implement logic to search for an offender
    const searchTerm = document.getElementById("searchBar").value;

    // Example: Fetch and display offender information (replace with actual logic)
    const offenderList = document.getElementById("tabContent");
    offenderList.innerHTML = "<li>Offender1 - Crime1</li><li>Offender2 - Crime2</li>";
}

function logout() {
    // Handle logout and clearing username
    document.getElementById("robloxUsername").value = "";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
}
