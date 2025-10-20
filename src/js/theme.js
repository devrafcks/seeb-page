document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.setAttribute("dark", "");
    icon.textContent = "light_mode";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = html.hasAttribute("dark");

    if (isDark) {
      html.removeAttribute("dark");
      localStorage.setItem("theme", "light");
      icon.textContent = "dark_mode";
    } else {
      html.setAttribute("dark", "");
      localStorage.setItem("theme", "dark");
      icon.textContent = "light_mode";
    }
  });
});
