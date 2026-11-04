const navbarToggle = document.querySelector(".navbar-toggle");
const navbarContent = document.querySelector("#navbar-content");

if (navbarToggle && navbarContent) {
  const setMenuOpen = (isOpen) => {
    navbarToggle.setAttribute("aria-expanded", String(isOpen));
    navbarToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
    navbarContent.classList.toggle("is-open", isOpen);
  };

  navbarToggle.addEventListener("click", () => {
    setMenuOpen(navbarToggle.getAttribute("aria-expanded") !== "true");
  });

  navbarContent.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a, [data-open-about]")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navbarToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      navbarToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });
}
