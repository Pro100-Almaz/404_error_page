function darkMode() {
  var content = document.getElementById("btn-theme");

  if (content.src.includes("theme_dark.png")) {
    content.src = "theme_light.png";
    var body_theme = document.body;
    body_theme.className = "body-dark";

    var icon = document.getElementsByClassName("theme");
    icon.className = "theme-dark";
    console.log(icon.className);
    var heroButton = document.getElementsByClassName("hero-button");
    heroButton.className = "hero-button-dark";

    var footer = document.getElementsByClassName("footer");
    footer.className = "footer-dark";
  } else {
    content.src = "theme_dark.png";
    var body_theme = document.body;
    body_theme.className = "body-light";

    var icon = document.getElementsByClassName("theme-dark");
    icon.className = "theme";

    var heroButton = document.getElementsByClassName("hero-button-dark");
    heroButton.className = "hero-button";

    var footer = document.getElementsByClassName("footer-dark");
    footer.className = "footer";
  }
}
