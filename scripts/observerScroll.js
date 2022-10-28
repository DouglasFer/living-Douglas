import { renderNewCards } from "../pages/home/index.js";

const observer = new IntersectionObserver((entries) => {
  if (entries.some((entrie) => entrie.isIntersecting)) {
    renderNewCards();
  }
});

export { observer };
