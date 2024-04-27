// Dynamically set current year in footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Dynamically set last modified date in footer
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;
