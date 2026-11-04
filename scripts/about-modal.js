const aboutDialog = document.querySelector("#about-modal");
const openAboutButton = document.querySelector("[data-open-about]");

if (aboutDialog instanceof HTMLDialogElement && openAboutButton instanceof HTMLButtonElement) {
  openAboutButton.addEventListener("click", () => {
    if (!aboutDialog.open) {
      aboutDialog.showModal();
    }
  });

  aboutDialog.querySelectorAll("[data-close-about]").forEach((button) => {
    button.addEventListener("click", () => aboutDialog.close());
  });

  aboutDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      aboutDialog.close();
    }
  });

  aboutDialog.addEventListener("click", (event) => {
    if (event.target === aboutDialog) {
      aboutDialog.close();
    }
  });
}
