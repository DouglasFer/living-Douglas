export function getPostFromLocalStorage() {
  const post = JSON.parse(localStorage.getItem("post") || "");
  return post;
}

export function getFilterFromLocalStorage() {
  const getFilter = JSON.parse(localStorage.getItem("Filtro" || ""));
  return getFilter;
}
