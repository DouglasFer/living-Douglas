import { getPostId } from "../../scripts/request.js";
import { getPostFromLocalStorage } from "../../scripts/localStorage.js";

const id_post = getPostFromLocalStorage();
let array_post_api = await getPostId(id_post);

function renderPost(post_array) {
  const main = document.getElementById("container");
  const div_container_title = document.createElement("div");

  const div_container_content = document.createElement("div");
  const title = document.createElement("p");
  const content_description = document.createElement("p");

  const img_post = document.createElement("img");
  const content_text = document.createElement("p");

  div_container_title.classList.add("div_container_title");
  div_container_content.classList.add("div_container_content");

  title.classList.add("title");
  content_description.classList.add("content_description");

  img_post.classList.add("img_post");
  content_text.classList.add("content_text");

  title.innerText = post_array.title;
  content_description.innerText = post_array.description;
  img_post.src = post_array.image;
  content_text.innerText = post_array.content;

  div_container_content.append(title, content_description);
  div_container_title.append(div_container_content);

  main.append(div_container_title, img_post, content_text);
}
renderPost(array_post_api);
