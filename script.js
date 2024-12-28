document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("dm");
    button.addEventListener("click", toggleDarkMode);  
});

function toggleDarkMode() {
    var element = document.body;
    var button = document.getElementById("dm");
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        button.textContent = "Disable Dark Mode";
     } else {
        button.textContent = "Enable Dark Mode";
     }
}