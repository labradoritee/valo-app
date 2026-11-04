const searchForm = document.querySelector(".navbar-search");
const searchInput = document.querySelector("#agent-search");
const filterButtons = document.querySelectorAll("[data-agent-filter]");
const agentCards = document.querySelectorAll(".agent-card");
const emptySearchMessage = document.querySelector(".agent-search-empty");
const themeButton = document.querySelector(".theme-button");

let activeRole = "all";

const normalizeSearchText = (text) =>
  text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");

const applyAgentFilters = () => {
  const searchTerm = normalizeSearchText(searchInput?.value.trim() ?? "");
  let visibleCards = 0;

  agentCards.forEach((card) => {
    const roleText = normalizeSearchText(card.querySelector(".agent-role")?.textContent ?? "");
    const searchableText = normalizeSearchText(card.textContent ?? "");
    const matchesRole =
      activeRole === "all" ||
      (activeRole === "duelist" && roleText.includes("duellocu")) ||
      (activeRole === "initiator" && roleText.includes("oncu")) ||
      (activeRole === "controller" && roleText.includes("kontrol")) ||
      (activeRole === "sentinel" && roleText.includes("gozcu"));
    const matchesSearch = searchableText.includes(searchTerm);

    card.hidden = !(matchesRole && matchesSearch);
    if (!card.hidden) {
      visibleCards += 1;
    }
  });

  if (emptySearchMessage) {
    emptySearchMessage.hidden = visibleCards !== 0;
  }
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeRole = button.dataset.agentFilter ?? "all";

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    applyAgentFilters();
  });
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  applyAgentFilters();
});

searchInput?.addEventListener("input", applyAgentFilters);

themeButton?.addEventListener("click", () => {
  const isLightTheme = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = isLightTheme ? "dark" : "light";
  themeButton.setAttribute(
    "aria-label",
    isLightTheme ? "Aydınlık moda geç" : "Karanlık moda geç"
  );
});

applyAgentFilters();
