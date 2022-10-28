export function getPostFromLocalStorage() {
  const post = JSON.parse(localStorage.getItem("post") || "");
  return post;
}
