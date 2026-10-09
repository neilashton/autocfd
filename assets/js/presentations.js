(() => {
  const page = document.querySelector(".presentations-page");
  if (!page) return;
  const search = page.querySelector("#presentation-search");
  const sectionFilter = page.querySelector("#presentation-section");
  const sections = Array.from(page.querySelectorAll(".presentation-section"));
  const entries = Array.from(page.querySelectorAll(".presentation-entry"));
  const count = page.querySelector("#presentation-count");
  const empty = page.querySelector("#presentation-empty");
  const normalize = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
  const searchable = new Map(entries.map((entry) => [entry, normalize(entry.querySelector(".presentation-entry__content").textContent)]));

  function filter() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    sections.forEach((section) => {
      let sectionCount = 0;
      section.querySelectorAll(".presentation-entry").forEach((entry) => {
        const matches =
          (!sectionFilter.value || section.dataset.section === sectionFilter.value) && words.every((word) => searchable.get(entry).includes(word));
        entry.hidden = !matches;
        if (matches) sectionCount += 1;
      });
      section.hidden = sectionCount === 0;
      visible += sectionCount;
    });
    count.textContent = `${visible} of ${entries.length} presentations and discussions`;
    empty.hidden = visible !== 0;
  }
  function clearFilters() {
    search.value = "";
    sectionFilter.value = "";
    filter();
  }
  search.addEventListener("input", filter);
  sectionFilter.addEventListener("change", filter);
  page.querySelector("#presentation-reset").addEventListener("click", clearFilters);
  // Summary links and shared anchors remain reachable while filters are active.
  function revealAnchor() {
    const target = entries.find((entry) => `#${entry.id}` === window.location.hash);
    if (!target) return;
    clearFilters();
    target.scrollIntoView({ block: "start" });
  }
  window.addEventListener("hashchange", revealAnchor);
  page.querySelector(".presentation-summaries").addEventListener("click", (event) => {
    if (event.target.closest("a")) clearFilters();
  });
  page.querySelector(".presentation-filters").hidden = false;
  filter();
  revealAnchor();
})();
