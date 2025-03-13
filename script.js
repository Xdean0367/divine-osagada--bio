// Dark Mode Toggle with Local Storage
const darkModeSwitch = document.getElementById("dark-mode-switch");

// Check if Dark Mode was enabled before
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeSwitch.checked = true;
}

// Toggle Dark Mode and Save Preference
darkModeSwitch.addEventListener("change", function () {
    if (darkModeSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// Show My Story
document.getElementById('story-btn').addEventListener('click', function () {
    let storySection = document.getElementById('story-section');
    storySection.classList.toggle('hidden');
});

// Search Function
function searchContent() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let content = document.body.innerText.toLowerCase();
    
    if (content.includes(input) && input !== "") {
        alert("Search result found on the page!");
    } else {
        alert("No matches found.");
    }
}

// Show Biography Details When "ABOUT" is Clicked
document.querySelector('.nav-links a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default scrolling behavior

    let bioDetails = document.getElementById('bio-details');
    bioDetails.classList.toggle('hidden');
});


