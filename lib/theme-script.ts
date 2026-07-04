export const themeInitScript = `
(function () {
  var storageKey = "theme";
  var defaultTheme = "dark";
  var enableSystem = true;

  try {
    var theme = localStorage.getItem(storageKey) || defaultTheme;

    if (enableSystem && theme === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`.trim();
