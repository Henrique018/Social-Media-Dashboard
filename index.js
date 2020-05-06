const checkbox = document.querySelector("input");

checkbox.addEventListener("change", () => {
  const html = document.getElementsByTagName("html")[0];

  checkbox.checked === false
    ? html.setAttribute("data-theme", "light")
    : html.setAttribute("data-theme", "dark");
});
