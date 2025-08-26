// script.js

// Select the checkbox for theme toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
// Optionally, use OS preference if no setting saved
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    toggleSwitch.checked = true;
}

// Listen for toggle switch changes
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});
