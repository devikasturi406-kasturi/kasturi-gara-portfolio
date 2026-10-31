// Theme Toggle Management
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check for user's saved preference in localStorage
const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
htmlElement.setAttribute("data-theme", savedTheme);
updateToggleIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio_theme", newTheme);
  updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
