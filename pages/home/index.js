import { getPostsApi } from "../../scripts/request.js";
import { observer } from "../../scripts/observerScroll.js";

let array_api = await getPostsApi();
let selected_category = "Todos";
var count_page = 0;
const ul_posts = document.getElementById("ul_posts");

export async function render(posts_list) {
  const obsever_exist = document.querySelector(".observer");
  if (obsever_exist) {
    obsever_exist.remove();
  }
  const new_posts_list = posts_list.filter(
    (post) => post.category == selected_category || selected_category == "Todos"
  );

  new_posts_list.forEach((element) => {
    const card = createCards(element);
    ul_posts.append(card);
  });

  const div_observe = document.createElement("div");
  div_observe.classList.add("observer");
  ul_posts.append(div_observe);

  observer.observe(div_observe);
}

export function createCards(arr_api) {
  const li_posts = document.createElement("li");
  const div_container = document.createElement("div");

  const img_card = document.createElement("img");

  const div_content = document.createElement("div");
  const title_content = document.createElement("p");
  const span_description = document.createElement("span");
  const p_access_content = document.createElement("p");

  div_container.classList.add("div_container_cards");

  div_content.classList.add("div_content_card");
  title_content.classList.add("title_content");
  p_access_content.classList.add("p_access_content");
  li_posts.id = arr_api.id;

  img_card.src = arr_api.image;
  title_content.innerText = arr_api.title;
  span_description.innerText = arr_api.description;
  p_access_content.innerText = "Acessar conteúdo";

  div_content.append(title_content, span_description, p_access_content);
  div_container.append(img_card, div_content);
  li_posts.append(div_container);

  return li_posts;
}

function renderFilterPosts(posts_list) {
  const btn_filter_list = document.querySelectorAll("button");

  btn_filter_list.forEach((btn_filter) => {
    btn_filter.addEventListener("click", async () => {
      const category = btn_filter.innerText;
      selected_category = category;
      ul_posts.innerText = "";
      count_page = 0;
      let response = await getPostsApi(count_page);
      render(response.news);
    });
  });
}

export async function renderNewCards() {
  const dados = await getPostsApi(count_page + 1);

  if (count_page < 3) {
    render(dados.news);

    count_page += 1;
  }
}

render(array_api.news);
renderFilterPosts(array_api.news);
